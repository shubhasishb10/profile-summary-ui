export type SkillProps = {
  name: string;
  version?: string;
  exp: number;
  lastUsed: Date;
};

export default function Skill({
  name,
  exp,
  lastUsed,
  version = undefined,
}: SkillProps) {
  return (
    <div
      className="inline-grid grid-cols-1 place-items-center items-center justify-items-center place-content-center
                      m-[3rem] p-[5px] shadow-xl rounded-lg w-auto bg-[url('skill-item-bg.jpeg')] hover:shadow-2xl cursor-pointer"
    >
      <div>
        <h1 className="text-2xl text-white font-bold p-2 tracking-widest">
          {name} {version ? " - " + version : undefined}
        </h1>
        <h4 className="p-2 text-white text-lg">Experience: {exp} years</h4>
        <h3 className="p-2 text-white text-md">
          Last Used:{" "}
          {lastUsed.toLocaleString("en-IN", {
            month: "short",
            year: "numeric",
          })}
        </h3>
      </div>
    </div>
  );
}
