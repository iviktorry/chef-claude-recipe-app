export default function Form() {
  return (
    <form className="flex gap-3 justify-center flex-col md:flex-row">
      <input
        className="flex-2 rounded-lg px-3 ring py-2 ring-zinc-300 bg-white focus:ring-zinc-600 dark:text-black dark:bg-olive-100 border-none outline-none "
        type="text"
        aria-label="add ingredient"
        placeholder="e.g. oregano"
      />
      <button className="flex-1 bg-zinc-900 text-white px-9 py-2 rounded-lg dark:text-black dark:bg-olive-100">
        + Add ingredient
      </button>
    </form>
  );
}
