import { useParams } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipe";
import { useState } from "react";

function Recipe() {
  const { id } = useParams();
  const recipes = useRecipes();
  const recipe = recipes.find((r) => String(r.id) === String(id));

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    servings: "",
    prepMinutes: "",
    cookMinutes: "",
  });

  if (!recipe) {
    return <p>Loading recipe... yoki Recipe not found</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      ...formData,
      image: {
        large: formData.imageLarge,
        small: formData.imageSmall,
      },
      ingredients: formData.ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      instructions: formData.instructions
        .split("\n")
        .map((step) => step.trim())
        .filter((step) => step !== ""),
    };

    try {
      await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });
      alert("Recipe added!");
      setShowForm(false);
      setFormData({
        title: "",
        overview: "",
        servings: "",
        prepMinutes: "",
        cookMinutes: "",
        imageLarge: "",
        imageSmall: "",
        ingredients: "",
        instructions: "",
      });
    } catch (err) {
      console.error("Error saving recipe:", err);
    }
  };

  return (
    <>
      <div className="healthy">
        <p className="text">
          <span>Recipe / </span>
          <span>{recipe.title}</span>
        </p>

        <section className="salad">
          <div className="salat__img-box">
            <img
              className="salad__image"
              src={recipe.image.large}
              alt={recipe.title}
            />
          </div>

          <div className="salad__content">
            <h2 className="salad__title">{recipe.title}</h2>
            <p className="salad__text">{recipe.overview}</p>

            <div className="foots__box">
              <p className="foots__content-text">
                <img
                  src="/images/icon-servings.svg"
                  alt=""
                  className="foots__content-image"
                />
                <span> Servings: {recipe.servings}</span>
              </p>
              <p className="foots__content-text">
                <img
                  src="/images/icon-prep-time.svg"
                  alt=""
                  className="foots__content-image"
                />
                <span>Cook: {recipe.cookMinutes} mins</span>
              </p>
              <p className="foots__content-text">
                <img
                  src="/images/icon-cook-time.svg"
                  alt=""
                  className="foots__content-image"
                />
                <span>Prep: {recipe.prepMinutes} mins</span>
              </p>
            </div>

            <h5 className="salad__content-title">Ingredients:</h5>
            <ul className="salad__list">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="salad__item">
                  <div className="exist__caption">
                    <img
                      className="exist__image"
                      src="/images/icon-bullet-point.svg"
                      alt=""
                    />
                    <h4 className="exist__sapn">{item}</h4>
                  </div>
                </li>
              ))}
            </ul>

            <h5 className="salad__content-title">Instructions:</h5>
            <ul className="salad__list">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="salad__item">
                  <div className="exist__caption">
                    <img
                      className="exist__image"
                      src="/images/icon-bullet-point.svg"
                      alt=""
                    />
                    <h4 className="exist__sapn">{step}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <hr className="line" />
    </>
  );
}

export default Recipe;
