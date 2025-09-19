import PremTime from "./PremTime";
import CookTime from "./CookTime";
import { useRecipes } from "../hooks/useRecipe";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateRecipe from "../components/CreateRecipe";

function Recipes() {
  const recipes = useRecipes();

  const [searchValue, setSearchValue] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      recipe.overview.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (!window.confirm("Rostdan ham o'chirmoqchimisiz?")) return;

    try {
      await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
      });
      alert("Recipe o'chirildi!");
      window.location.reload();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

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
              alt="search icon"
            />
            <input
              type="text"
              className="search__input"
              placeholder="Search by name or ingredient..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <section className="foots">
          <ul className="foots__list">
            {filteredRecipes.map((recipe) => (
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
                    <p>
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
                  <Link to={`/recipes/${recipe.id}`} className="item-btn">
                    View Recipe
                  </Link>

                  <button
                    onClick={() => handleDelete(recipe.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <CreateRecipe />
        </section>
      </div>
    </>
  );
}

export default Recipes;
