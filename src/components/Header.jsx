import chefClaudeIcon from "../assets/chef-claude-icon.svg";

export default function Header() {
  return (
    <header className="flex gap-3 items-center justify-center w-full py-7 bg-olive-50 shadow-lg shadow-stone-200 dark:shadow-stone-950 dark:bg-neutral-800">
      <img src={chefClaudeIcon} alt="logo" />
      <h1 className="text-3xl">Chef Claude</h1>
    </header>
  );
}
// dark:bg-zinc-700
