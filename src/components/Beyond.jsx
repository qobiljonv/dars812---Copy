function Beyond() {
  return (
    <section className="beyond">
      <div className="beyond__box">
        <h2 className="beyond__title">Beyond the plate</h2>
        <p className="beyond__text">
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </p>
        <ul className="beyond__list">
          <li className="beyond__item">
            Encourage family dinners and social cooking.
          </li>
          <li className="beyond__item">
            Reduce reliance on single-use packaging and delivery waste.
          </li>
          <li className="beyond__item">
            Spark curiosity about seasonal produce and local agriculture.
          </li>
        </ul>
      </div>
      <div className="beyond__image-box">
        <img
          src="./images/image-about-beyond-the-plate-large.webp"
          alt=""
          className="beyond__image"
        />
      </div>
    </section>
  );
}

export default Beyond;
