"use client";

const Video = () => {
  return (
    <div className="relative w-full max-w-2xl  h-full overflow-hidden ">
      <video
        src="/IMG_3766.MOV"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;
