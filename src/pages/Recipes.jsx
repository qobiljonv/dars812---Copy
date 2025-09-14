import PremTime from "./PremTime";
import CookTime from "./CookTime";
import { useRecipes } from "../hooks/useRecipe";
import { Link } from "react-router-dom";

function Recipes() {
  const recipes = useRecipes();

  return (
    <>
      <div className="healthy">
        <section>
          <div className="healthy__box">
            <h3 className="healthy__title">
              Explore our simple, healthy recipes
            </h3>
            <p className="healthy__text">
              Discover eight quick, whole-food dishes that fit real-life
              schedules and taste amazing. Use the search bar to find a recipe
              by name or ingredient, or simply scroll the list and let something
              delicious catch your eye.
            </p>
          </div>
        </section>

        <div className="search">
          <div className="time">
            <PremTime />
            <CookTime />
          </div>
          <div className="search__box">
            <img
              className="search__icon"
              src="./images/icon-search.svg"
              alt=""
            />
            <input
              type="text"
              className="search__input"
              placeholder="Search by name or ingredient..."
            />
          </div>
        </div>

        <section className="foots">
          <ul className="foots__list">
            {recipes.map((recipe) => (
              <li key={recipe.id} className="foots__item">
                <img
                  src={recipe.image.large}
                  alt={recipe.title}
                  className="foots__image"
                />
                <h4 className="foots__title">{recipe.title}</h4>
                <p className="foots__text">{recipe.overview}</p>

                <div className="foots__box">
                  <div className="foots__content">
                    <p className="foots__content-text">
                      <img
                        src="./images/icon-servings.svg"
                        alt=""
                        className="foots__content-image"
                      />
                      <span>Servings: {recipe.servings}</span>
                    </p>
                    <p className="foots__content-text">
                      <img
                        src="./images/icon-cook-time.svg"
                        alt=""
                        className="foots__content-image"
                      />
                      <span>Cook: {recipe.cookMinutes}</span>
                    </p>
                  </div>
                  <p className="foots__content-text">
                    <img
                      src="./images/icon-prep-time.svg"
                      alt=""
                      className="foots__content-image"
                    />
                    <span>Prep: {recipe.prepMinutes}</span>
                  </p>
                </div>

                <div className="foots__item-btn">
                  <Link to="./recipe" className="item-btn">
                    View Recipe
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Recipes;
