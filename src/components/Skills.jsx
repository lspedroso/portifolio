import {
  SiC,
  SiJavascript,
  SiReact,
  SiCss,
  SiHtml5,
  SiPython,
} from 'react-icons/si';

const skills = [
  {
    name: 'C',
    icon: SiC,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'CSS',
    icon: SiCss,
  },
  {
    name: 'HTML',
    icon: SiHtml5,
  },
  {
    name: 'Python',
    icon: SiPython,
  },
];

function SkillList() {
  return (
    <div className="skills-list">
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <div className="skill" key={skill.name}>
            <Icon />
            <span>{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}

function Skills() {
  return (
    <section className="skills">

      <div className="skills-carousel">
        <div className="skills-track">
          <SkillList />
          <SkillList />
        </div>
      </div>
    </section>
  );
}

export default Skills;