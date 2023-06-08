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
              Hi there! What draws me to programming is the engagement of
              tackling challenging tasks and resolving intricate issues! I love
              pushing my boundaries by dealing with tough situations and
              problems, all in the effort to improve my skills.
            </p>
            <p className="info">
              I've had the experience of designing and launching several web
              apps, using a broad mix of both front-end and back-end
              technologies. Here's a non-exhaustive list of my skills:
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
