import { useRecipes } from "../hooks/useRecipe";

function Recipe() {
  const recipes = useRecipes();
  return (
    <div className="healthy">
      <p>
        <span>Recipe / </span>
        <span>Mediterranean Chickpea Salad</span>
      </p>
      <section className="salad">
        <div className="salat__img-box">
          <img
            className="salad__image"
            src="/images/greek-yogurt-large.webp"
            alt=""
          />
        </div>
        <div className="salad__content">
          <h2 className="salad__title">Mediterranean Chickpea Salad</h2>
          <p className="salad__text">
            A refreshing, protein-packed salad tossed in a lemon-olive oil
            dressing.
          </p>
          <div className="foots__box">
            <p className="foots__content-text">
              <img
                src="/images/icon-servings.svg"
                alt=""
                className="foots__content-image"
              />
              <span>Servings:</span>
            </p>
            <p className="foots__content-text">
              <img
                src="/images/icon-cook-time.svg"
                alt=""
                className="foots__content-image"
              />
              <span>Cook: </span>
            </p>
            <p className="foots__content-text">
              <img
                src="/images/icon-prep-time.svg"
                alt=""
                className="foots__content-image"
              />
              <span>Prep:</span>
            </p>
          </div>
          <h5 className="salad__content-title">Ingredients:</h5>
          <ul className="salad__list">
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
          </ul>

          <h5 className="salad__content-title">Instructions:</h5>
          <ul className="salad__list">
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>

            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
            <li className="salad__item">
              <div className="exist__caption">
                <img
                  className="exist__image"
                  src="/images/icon-bullet-point.svg"
                  alt=""
                />
                <h4 className="exist__sapn">Make healthy look good.</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Recipe;
