import { useState } from "react";

function CreateRecipe() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    servings: "",
    prepMinutes: "",
    cookMinutes: "",
    imageLarge: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      ...formData,
      image: {
        large: formData.imageLarge,
      },
      ingredients: formData.ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      instructions: formData.instructions
        .split("\n")
        .map((step) => step.trim())
        .filter(Boolean),
    };

    try {
      await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        ingredients: "",
        instructions: "",
      });
    } catch (err) {
      console.error("Error saving recipe:", err);
    }
  };

  return (
    <>
      <div className="creates">
        <button className="creates__btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Create"}
        </button>
      </div>

      {showForm && (
        <div className="create-form">
          <h3>Add New Recipe</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="overview"
              placeholder="Overview"
              value={formData.overview}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="servings"
              placeholder="Servings"
              value={formData.servings}
              onChange={handleChange}
              required
            />
            <textarea
              name="ingredients"
              placeholder="Ingredients (har birini yangi qatorda yozing)"
              value={formData.ingredients}
              onChange={handleChange}
              required
            />
            <textarea
              name="instructions"
              placeholder="Instructions (har birini yangi qatorda yozing)"
              value={formData.instructions}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="prepMinutes"
              placeholder="Prep Minutes"
              value={formData.prepMinutes}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="cookMinutes"
              placeholder="Cook Minutes"
              value={formData.cookMinutes}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="imageLarge"
              placeholder="Image URL (Large)"
              value={formData.imageLarge}
              onChange={handleChange}
              required
            />

            <button type="submit">Save Recipe</button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateRecipe;
