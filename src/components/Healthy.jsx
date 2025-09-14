function Healthy() {
  return (
    <section className="healthy">
      <div className="healthy__box">
        <h1 className="healthy__title">Healthy meals, zero fuss</h1>
        <p className="healthy__text">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <button className="healthy__btn btn">Start exploring</button>
      </div>
      <div className="healthy__img-box">
        <img
          className="healthy__img"
          src="./images/image-home-hero-large.webp"
          alt="Healthy"
        />
      </div>
    </section>
  );
}

export default Healthy;
