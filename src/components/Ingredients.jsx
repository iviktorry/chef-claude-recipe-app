export default function Ingredients(props) {
  //   const ingredientsExample = ["carrot", "peper", "mama", "lala"];

  const ingredientsElements = props.ingredientsList.map((item, index) => (
    <li className="list-disc py-1.5" key={index}>
      {item}
    </li>
  ));

  return (
    <div>
      <div>
        <h2 className="text-3xl pb-3">Ingredients on hand:</h2>
      </div>
      <ul className="list-inside">{ingredientsElements}</ul>
    </div>
  );
}
