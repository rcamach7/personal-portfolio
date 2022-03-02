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
    <div className="Project">
      <img src={project.still} alt="" />
    </div>
  );
}
