function Philosophy() {
  return (
    <section className="exist">
      <div className="exist__title-box">
        <h2 className="exist__title">Our food philosophy</h2>
      </div>
      <ul className="exist__list">
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Whole ingredients first.</h4>
          </div>
          <p className="exist__text">
            Fresh produce, grains, legumes, herbs, and quality fats form the
            backbone of every recipe.
          </p>
        </li>
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Flavor without compromise.</h4>
          </div>
          <p className="exist__text">
            Spices, citrus, and natural sweetness replace excess salt, sugar,
            and additives.
          </p>
        </li>
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Respect for time.</h4>
          </div>
          <p className="exist__text">
            Weeknight meals should slot into real schedules; weekend cooking can
            be leisurely but never wasteful.
          </p>
        </li>
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Sustainable choices.</h4>
          </div>
          <p className="exist__text">
            Short ingredient lists cut down on food waste and carbon footprint,
            while plant-forward dishes keep things planet-friendly.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Philosophy;
