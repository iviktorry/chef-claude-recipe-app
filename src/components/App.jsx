import Header from "./Header";
import Form from "./Form";
import Ingredients from "./Ingredients";
import { useState } from "react";

export default function App() {
  const [ingredientsList, setIngredientsList] = useState([]);

  function addIngredient(event) {
    event.preventDefault();
    const newIngredient = document.getElementById("ingredient").value;
    setIngredientsList((i) => [...i, newIngredient]);
    document.getElementById("ingredient").value = "";
  }

  return (
    <div className="min-h-lvh flex bg-olive-50 dark:bg-zinc-700">
      <div className="w-3xl rounded-none min-h-full md:m-auto md:rounded-2xl overflow-hidden text-black bg-olive-100 dark:text-olive-100 dark:bg-zinc-800">
        <Header />
        <main className="py-10 px-4 md:py-17.5 md:px-16 flex flex-col gap-12">
          <Form addIngredient={addIngredient} />
          <Ingredients ingredientsList={ingredientsList} />
        </main>
      </div>
    </div>
  );
}
