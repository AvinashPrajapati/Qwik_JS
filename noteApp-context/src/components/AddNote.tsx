

// src/components/AddNote.tsx
import { component$, useSignal, useContext } from "@builder.io/qwik";
import { NoteContext } from "~/notesContext";


export const AddNote = component$(() => {
  const newNote = useSignal("");
  const { addNote } = useContext(NoteContext);

  return (
    <form
      class="mt-4"
      preventdefault:submit

      onSubmit$={(e) => {
        if (newNote.value.trim() !== "") {
          addNote!(newNote.value);
          newNote.value = "";
        }
      }}
    >
      <div class="flex">
        <input
          type="text"
          value={newNote.value}
          onInput$={(e) => (newNote.value = (e.target as HTMLInputElement).value)}
          class="flex-grow p-2 border rounded-l-lg"
          placeholder="Enter a new note"
        />
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </form>
  );
});
