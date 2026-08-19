import Header from "./Header";
import Form from "./Form";

export default function App() {
  return (
    <div className="min-h-lvh flex bg-olive-50 dark:bg-zinc-700">
      <div className="w-3xl m-auto rounded-2xl overflow-hidden text-black bg-olive-100 dark:text-olive-100 dark:bg-zinc-800">
        <Header />
        <main className="py-17.5 px-16 flex flex-col gap-12 ">
          <Form />
        </main>
      </div>
    </div>
  );
}
