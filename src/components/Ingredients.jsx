export default function Ingredients(props) {
  //   const ingredientsExample = ["carrot", "peper", "mama", "lala"];

  const ingredientsElements = props.ingredientsList.map((item, index) => (
    <li className="list-disc" key={index}>{item}</li>
  ));

  return (
    <div>
      <h2 className="text-3xl pb-6">Ingredients on hand:</h2>
      <ul className="list-inside">{ingredientsElements}</ul>
    </div>
  );
}
