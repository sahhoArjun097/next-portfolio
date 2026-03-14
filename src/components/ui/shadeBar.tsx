const ShadeBar = () => {
  return (
    <>
      <div
        className="w-full h-6 mt-4 pointer-events-none
  bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_8px)]
  dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_8px)]"
      />
    </>
  );
};

export default ShadeBar;
