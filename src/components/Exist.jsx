function Exist() {
  return (
    <section className="exist">
      <div className="exist__title-box">
        <h2 className="exist__title">Why we exist</h2>
      </div>
      <ul className="exist__list">
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Cut through the noise.</h4>
          </div>
          <p className="exist__text">
            The internet is bursting with recipes, yet most busy cooks still
            default to take-away or packaged foods. We curate a tight collection
            of fool-proof dishes so you can skip the scrolling and start
            cooking.
          </p>
        </li>
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Empower home kitchens.</h4>
          </div>
          <p className="exist__text">
            When you control what goes into your meals, you control how you
            feel. Every recipe is built around unrefined ingredients and ready
            in about half an hour of active prep.
          </p>
        </li>
        <li className="exist__item">
          <div className="exist__caption">
            <img
              className="exist__image"
              src="./images/icon-bullet-point.svg"
              alt=""
            />
            <h4 className="exist__sapn">Make healthy look good.</h4>
          </div>
          <p className="exist__text">
            High-resolution imagery shows you exactly what success looks
            like—because we eat with our eyes first, and confidence matters.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Exist;
