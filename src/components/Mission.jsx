function Mission() {
  return (
    <section className="mission">
      <div className="misson__container">
        <h4 className="mission__color">Our mission</h4>
        <h2 className="mission__title">
          Help more people cook nourishing meals, more often.
        </h2>
        <p className="mission__text">
          <span>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </span>
          <br />
          <br />
          <span>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </span>
        </p>
      </div>
      <div className="mission__image-box">
        <img
          className="mission__image"
          src="./images/image-about-our-mission-large.webp"
          alt=""
        />
      </div>
    </section>
  );
}

export default Mission;
