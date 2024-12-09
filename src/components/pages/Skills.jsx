import { devSkills } from "../../constants/skills.js";
import { useEffect, useState } from "react";
import Skill from "./Skill.jsx";

const Skills = () => {
  const [javaScript, setJavaScript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setJavaScript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 72);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 65);
      });

      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });
    }, 200);
    return () => {
      setInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, reactSkill } = devSkills;
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javaScript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={reactJs}
      />
    </>
  );
};

export default Skills;
