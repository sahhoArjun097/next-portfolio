"use client";

import { Label } from "@radix-ui/react-label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/src/components/ui/button";
import { useFormik } from "formik";
import { Input } from "@/src/components/ui/input";

const FormModal = () => {
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      try {
        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          values,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        );
        if (response.status === 200) {
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_ID!,
            values,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          );
          resetForm();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-8 py-3 text-lg cursor-pointer rounded-xl border border-gray-700 tracking-tight tapestry font-semibold transition">
          Start your project
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-black tracking-tight tapestry rounded-xl border border-gray-800">
        <DialogHeader>
          <DialogTitle>Start Your Project</DialogTitle>
          <DialogDescription>
            Fill out the form below and we’ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-6" onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="border border-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border border-gray-700"
              required
            />
          </div>

          {/* Phone */}
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="border border-gray-700"
            />
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              value={formik.values.message}
              onChange={formik.handleChange}
              className="border border-gray-700 rounded-md px-3 py-2"
              required
            />
          </div>

          <DialogFooter className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-200 hover:text-black"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="bg-white text-black hover:bg-gray-200"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
