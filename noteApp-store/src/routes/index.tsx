import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NoteList } from "~/components/NoteList";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-800">
      <header class="p-6 bg-blue-600 text-white text-center">
        <h1 class="text-2xl font-bold">Qwik Note App</h1>
      </header>
      <main class="p-4">
        <NoteList />
      </main>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
