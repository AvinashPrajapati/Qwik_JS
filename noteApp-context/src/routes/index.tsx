import { component$, useSignal, useContextProvider, $ } from "@builder.io/qwik";
import { NoteContext } from "~/notesContext";
import { NoteList } from "../components/NoteList";

export default component$(() => {
  const notes = useSignal<{ id: number; text: string }[]>([{ id: 1, text: "First Note" }]);

  // Methods to add and delete notes
  const addNote = $((text: string) => {
    notes.value = [...notes.value, { id: Date.now(), text }];
  });

  const deleteNote = $((id: number) => {
    notes.value = notes.value.filter((note) => note.id !== id);
  });

  // Set the context so it can be accessed by child components
  useContextProvider(NoteContext, {
    notes,  // Pass the Signal directly
    addNote,
    deleteNote,
  });

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
