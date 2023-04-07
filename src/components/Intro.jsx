function Intro() {
  return (
    <section className="Intro">
      <p className="sub-intro">Hi, my name is</p>
      <h1 className="name">Ricardo Camacho Mireles</h1>
      <h1 className="role">I build things for the web.</h1>

      <p className="description">
        <strong>
          As an enthusiastic full stack developer, I love tackling challenges
          where I can keep honing my skills and grow professionally.
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
