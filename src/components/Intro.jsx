function Intro() {
  return (
    <section className="Intro">
      <p className="sub-intro">Hi, my name is</p>
      <h1 className="name">Ricardo Camacho Mireles</h1>
      <h1 className="role">I build things for the web.</h1>

      <p className="description">
        <strong>
          I'm a dedicated full-stack developer with a passion for building
          user-friendly web experiences. With a mix of front-end and back-end
          skills, I'm eager to turn your digital ideas into reality.
        </strong>
      </p>

      <button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1GpYCxI_FxsFQoSdMg_VptYgjSblfiEzU/view?usp=sharing",
            "_blank"
          )
        }
      >
        Resume
      </button>
    </section>
  );
}

export default Intro;
