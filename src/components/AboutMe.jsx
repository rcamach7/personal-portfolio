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
              Hi! I am passion about problem solving, which is at the root of
              why I enjoy programming so much! I find a lot of enjoyment in
              challenging myself to work through tough problems and situations
              to improve my skills.
            </p>
            <p className="info">
              I have experience in developing and deploying web applications
              utilizing a variety of front-end and back-end technologies. A non
              exhaustive list can be found below.
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
