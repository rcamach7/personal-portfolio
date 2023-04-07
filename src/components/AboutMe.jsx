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
              Hey there! I'm super excited about solving problems, which is the
              main reason I'm so into programming! I just love putting myself to
              the test by tackling tough issues and situations, all in the name
              of sharpening my skills.
            </p>
            <p className="info">
              I've had the chance to build and launch various web apps,
              utilizing a ton of different front-end and back-end tech. Here's a
              list of my skills, although it's not exhaustive:
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
