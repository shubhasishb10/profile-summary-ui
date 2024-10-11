import Skill, { SkillProps } from "./skills/Skill";

const SKILLS: SkillProps[] = [
  {
    name: "Java",
    exp: 8,
    lastUsed: new Date(),
    version: "11",
  },
  {
    name: "ReactJS",
    exp: 3,
    lastUsed: new Date(),
  },
  {
    name: "JavaScript",
    exp: 7,
    lastUsed: new Date(),
  },
  {
    name: "Spring Boot",
    exp: 5,
    lastUsed: new Date(),
  },
  {
    name: "Spring MVC",
    exp: 5,
    lastUsed: new Date("2023-12-01"),
  },
];

export default function Skills() {
  return (
    <div className="h-screen">
      {SKILLS.map((skill) => (
        <Skill {...skill} />
      ))}
    </div>
  );
}
