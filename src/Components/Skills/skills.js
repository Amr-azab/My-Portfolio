import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaNodeJs, // Import the Node.js icon
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

import classes from "./skills.module.css";
const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    NodeJS: <FaNodeJs />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    TypeScript: <SiTypescript />,
    Postman: <SiPostman />, // Postman icon
    MongoDB: <SiMongodb />,
    SQL: <FaDatabase />,
    Express: <SiExpress />,
    NextJS: <SiNextdotjs />,
    // Add Node.js to the list of skills
  };

  return (
    <div title={skill} className={classes.SkillBox}>
      {icon[skill]}
    </div>
  );
};

export default Skills;
