interface HeaderTitleProps {
  title: string;
}
const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <div className="mb-6">
      <span className=" text-sm tracking-tight tapestry">Featured</span>
      <h2 className="text-2xl tracking-tight tapestry">{title}</h2>
    </div>
  );
};

export default HeaderTitle;
