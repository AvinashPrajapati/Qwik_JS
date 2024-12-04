

// src/components/AddNote.tsx

import { component$,$, useSignal } from '@builder.io/qwik';
import { useNotesStore } from '~/stores/useNotesStore';

interface AddNoteProps {
  editingNote: { value: { id: number | null; text: string } };
}


export const AddNote = component$<AddNoteProps>(({editingNote}) => {
  const state = useNotesStore();

  const handleSave = $(() => {
    if (editingNote.value.text.trim() !== '') {
      if (editingNote.value.id) {
        console.log("update is called");
        // Editing an existing note
        state.updateNote(editingNote.value.id, editingNote.value.text);
      } else {
        // Adding a new note
        state.addNote(editingNote.value.text);
      }
      editingNote.value = { id: null, text: '' }; // Reset after save
    }
  });

  return (
    <form
    preventdefault:submit
      onSubmit$={(e) => handleSave()}
      class="mt-4"
    >
      <div class="flex">
        <input
          type="text"
          value={editingNote.value.text}
          onInput$={(_,el) => (editingNote.value.text = el.value)}
          class="flex-grow p-2 border rounded-l-lg"
          placeholder="Enter a note"
        />
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
        >
          {editingNote.value.id ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
});
