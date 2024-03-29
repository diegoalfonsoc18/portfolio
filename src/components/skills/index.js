import {
  ContainerMain,
  Iconitem,
  ImgItem,
  ItemText,
  TitleSkill,
  WrapperItems,
  WrapperSkills,
  WrapperTitleSkills,
} from "./components.skills";
import html from "../../icon/html.png";
import css from "../../icon/css.png";
import javascript from "../../icon/js.png";
import react from "../../icon/react.svg";
import github from "../../icon/github-svgrepo-com.svg";
import docker from "../../icon/docker2-svgrepo-com.svg";
import photoshop from "../../icon/photoshop-svgrepo-com.svg";
import mySql from "../../icon/databaseIcon.png";
import git from "../../icon/git.png";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "MySQL",
      icon: mySql,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Git",
      icon: git,
    },
  ];

  // const others = [
  //   {
  //     name: "Github",
  //     icon: github,
  //   },
  //   {
  //     name: "Docker",
  //     icon: docker,
  //   },
  //   {
  //     name: "Photoshop",
  //     icon: photoshop,
  //   },
  // ];

  return (
    <ContainerMain>
      <WrapperTitleSkills>
        <TitleSkill>Tooling</TitleSkill>
      </WrapperTitleSkills>

      <WrapperSkills>
        {skills.map((skill) => (
          <WrapperItems key={skill.name}>
            <ImgItem>
              <Iconitem src={skill.icon} />
            </ImgItem>
            <ItemText>{`${skill.name}`}</ItemText>
          </WrapperItems>
        ))}
      </WrapperSkills>
    </ContainerMain>
  );
};
export default Skills;
