import skillData from "../assets/skills.json";

export default function AboutMe() {
  const skillCards = skillData.map((skillItem, i) => (
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
              Hi! I have a profound love for problem solving, which is at the
              root of why I enjoy programming so much! I find a lot of enjoyment
              in challenging myself to work through tough problems and
              situations.
            </p>
            <p className="info">
              I believe anything can be achieved through hard work.
            </p>
            <p className="info">
              I have built and deployed multiple web applications using both
              front end and back end technologies, some of which listed below.
            </p>
          </div>
        </div>

        <p className="skills-title">Strong skills in:</p>
        <div className="skills-container">{skillCards}</div>
      </div>
    </section>
  );
}

function SkillCard(props) {
  return (
    <div className="SkillCard">
      <img src={props.skill.img} alt="" />
      <p>{props.skill.skill}</p>
    </div>
  );
}
