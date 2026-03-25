import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name cannot exceed 30 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number")
    .required("Phone number is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(200, "Message cannot exceed 200 characters")
    .required("Message is required"),
});
export default validationSchema