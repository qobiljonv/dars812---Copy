function WhatYou() {
  return (
    <section className="whatYou">
      <h2 className="whatYou__title">What you'll get</h2>
      <ul className="whatYou__list">
        <li className="whatYou__item">
          <div className="wight1">
            <img
              className="whatYou__icon"
              src="./images/icon-whole-food-recipes.svg"
              alt=""
            />
          </div>
          <h4 className="whatYou__item-title">Whole-food recipes</h4>
          <p className="whatYou__text">
            Each dish uses everyday, unprocessed ingredients.
          </p>
        </li>
        <li className="whatYou__item">
          <div className="wight2 ">
            <img
              src="./images/icon-minimum-fuss.svg"
              alt=""
              className="whatYou__icon"
            />
          </div>
          <h4 className="whatYou__item-title">Minimum fuss</h4>
          <p className="whatYou__text">
            All recipes are designed to make eating healthy quick and easy.
          </p>
        </li>
        <li className="whatYou__item">
          <div className="wight3">
            <img
              src="./images/icon-search-in-seconds.svg"
              alt=""
              className="whatYou__icon"
            />
          </div>
          <h4 className="whatYou__item-title">Search in seconds</h4>
          <p className="whatYou__text">
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default WhatYou;
