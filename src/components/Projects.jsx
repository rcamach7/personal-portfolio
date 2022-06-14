import projects from "../assets/projects.json";

export default function Projects() {
  const projectsCollection = projects.map((project, i) => (
    <Project key={i} project={project} />
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

function Project({ project }) {
  return (
    <section className="Project reveal">
      <img src={project.still} alt="" />

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
              <span className="techPipe">
                {i + 1 === project.technologies.length ? null : ""}
              </span>
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
