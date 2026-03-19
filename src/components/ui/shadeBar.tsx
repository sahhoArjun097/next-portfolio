interface shadeBarProp {
  className?: string;
}
const ShadeBar = ({ className = "h-6" }: shadeBarProp) => {
  return (
    <>
      <div
        className={`w-full  mt-4 pointer-events-none ${className}
  bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_8px)]
  dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_8px)]`}
      />
    </>
  );
};

export default ShadeBar;
