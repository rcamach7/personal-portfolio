import projects from "../assets/projects.json";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Projects() {
  const { width } = useWindowDimensions();

  const projectsCollection = projects.map((project, i) => (
    <Project key={i} project={project} width={width} />
  ));

  return (
    <div className="Projects" id="Projects">
      <h1 className="section-title">
        <span className="numbering">02.</span> Featured Projects
      </h1>
      <div className="projects-container">{projectsCollection}</div>
    </div>
  );
}

function Project({ project, width }) {
  return (
    <section className="Project reveal">
      <div className="imageContainer">
        <div className="gif" style={{ backgroundImage: `url(${project.gif})` }}>
          <div
            className="topImage"
            style={{
              backgroundImage: `url(${
                width < 450 ? project.still_small : project.still
              })`,
            }}
          />
        </div>
      </div>

      <h2 className="project-title">{project.title}</h2>

      <ul className="projectBulletPoints">
        {project.bulletPoints.map((point, i) => {
          return <li key={i}>{point}</li>;
        })}
      </ul>

      <div className="technologies-container">
        <h2 className="subheading">Technology Stack</h2>
        <ul>
          {project.technologies.map((techItem, i) => (
            <li key={i}>
              <img
                className="techImage"
                src={techItem.link}
                alt={techItem.name}
              />
              <span className="techName">{techItem.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a href={`${project.source}`}>Source</a>
        <a href={`${project.live}`}>Live Demo</a>
      </div>
    </section>
  );
}
