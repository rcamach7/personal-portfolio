import skillData from "../assets/skills.json";

export default function AboutMe() {
  const frontEndSkillCards = skillData.frontend.map((skillItem, i) => (
    <SkillCard key={i} skill={skillItem} />
  ));
  const backEndSkillCards = skillData.backend_tools.map((skillItem, i) => (
    <SkillCard key={i} skill={skillItem} />
  ));

  return (
    <section className="AboutMe" id="AboutMe">
      <h2 className="section-title">
        <span className="numbering">01.</span>About Me
      </h2>

      <div className="aboutme-container reveal">
        <div className="aboutme-main">
          <div className="aboutme-picture" />

          <div className="aboutme-information">
            <p className="info">
              Hello! I've always loved programming, especially solving tough
              problems. I enjoy pushing my limits and tackling difficult tasks
              to keep improving my skills. Finding solutions to tricky
              challenges keeps me motivated and constantly learning.
            </p>
            <p className="info">
              I've designed and launched several web apps, using a mix of
              front-end and back-end technologies. Here's a list of some of my
              skills:
            </p>
          </div>
        </div>

        <p className="skills-title-frontend">Frontend</p>
        <div className="skills-container">{frontEndSkillCards}</div>

        <p className="skills-title-backend">Backend & Tools</p>
        <div className="skills-container">{backEndSkillCards}</div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const { img } = skill;
  return (
    <div className="SkillCard">
      <img src={img} alt={skill.skill} />
      <p>{skill.skill}</p>
    </div>
  );
}
