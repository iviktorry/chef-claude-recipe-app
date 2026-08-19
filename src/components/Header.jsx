import chefClaudeIcon from "../assets/chef-claude-icon.svg";

export default function Header() {
  return (
    <header className="flex gap-3 items-center w-full py-7 bg-white dark:bg-zinc-900">
      <img src={chefClaudeIcon} alt="logo" />
      <h1 className="text-3xl">Chef Claude</h1>
    </header>
  );
}
