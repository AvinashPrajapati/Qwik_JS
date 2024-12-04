import { component$, useContext } from "@builder.io/qwik";
import { NoteContext } from "~/notesContext";
import { AddNote } from "./AddNote";

export const NoteList = component$(() => {
  const { notes, deleteNote } = useContext(NoteContext);
  

  return (
    <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Your Notes</h2>
      <AddNote />
      <ul>
        {notes.value.map((note) => (
          <li key={note.id} class="flex justify-between items-center mb-2 p-2 border-b">
            <span>{note.text}</span>
            <button
              class="text-red-500 hover:text-red-700"
              onClick$={() => deleteNote!(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
