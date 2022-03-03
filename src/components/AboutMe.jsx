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
          <div className="aboutme-picture"></div>

          <div className="aboutme-information">
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <p className="info">
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis.
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
