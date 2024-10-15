interface TechnologyNameProps {
  children: string;
}

const TechnologyName = ({ children }: TechnologyNameProps) => {
  return <span className="border-2 rounded-md p-1.5 m-0.5 bg-[#eeeeee]">{children}</span>;
};

export default TechnologyName;
