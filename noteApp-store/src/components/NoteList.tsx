
// src/components/NoteList.tsx

import { $, component$, useSignal } from '@builder.io/qwik';
import { AddNote } from './AddNote';
import { useNotesStore } from '~/stores/useNotesStore';


export const NoteList = component$(() => {
  const state = useNotesStore();

  const editingNote = useSignal<{ id: number | null; text: string }>({ id: null, text: '' });

  const handleEdit = $((id: number) => {
    const note = state.notes.find((note) => note.id === id);
    if (note) {
      editingNote.value = { id: note.id, text: note.text };
    }
  });


  return (
    <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Your Notes</h2>
        <AddNote editingNote={editingNote}/>
      <ul>
        {state.notes.map((note) => (
          <li key={note.id} class="flex justify-between items-center mb-2 p-2 border-b">
            <span><button class="text-yellow-400 hover:text-yellow-600" onClick$={() => handleEdit(note.id)}>[/]</button> - {note.text}</span>
            <button
              class="text-red-500 hover:text-red-700"
              onClick$={() => state.deleteNote(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
