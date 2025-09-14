// src/services/recipeService.js
import { useEffect, useState } from "react";

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return recipes;
}
