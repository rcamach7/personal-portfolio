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

function Project(props) {
  const { project } = props;

  return (
    <section className="Project reveal">
      <img src={project.still} alt="" />

      <h2 className="project-title">{project.title}</h2>

      <p>{project.description}</p>

      <div className="outcome">
        <h2 className="subheading">Outcome</h2>
        <p>{project.outcome}</p>
      </div>

      <div className="technologies-container">
        <h2 className="subheading">Technologies Utilized</h2>
        <ul>
          {project.technologies.map((techItem, i) => (
            <li key={i}>{techItem}</li>
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
