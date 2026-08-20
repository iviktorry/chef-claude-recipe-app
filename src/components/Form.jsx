export default function Form(props) {
  return (
    <form
      action={props.handleSubmit}
      className="flex gap-3 justify-center flex-col md:flex-row"
    >
      <input
        className="flex-2 rounded-lg px-3 ring py-2 ring-zinc-300 focus:ring-neutral-500 bg-olive-100 dark:placeholder:text-neutral-400 dark:text-stone-100 dark:bg-neutral-900 dark:ring-stone-700 dark:focus:ring-stone-400 border-none outline-none "
        type="text"
        aria-label="add ingredient"
        placeholder="e.g. oregano"
        name="ingredient"
        id="ingredient"
      />
      <button
        className="flex-1 bg-stone-900 text-white px-9 py-2 rounded-lg font-sans dark:bg-stone-100 dark:text-black"
        aria-label="add ingredient button"
      >
        + Add ingredient
      </button>
    </form>
  );
}
