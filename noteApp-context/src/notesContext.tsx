// src/context/NoteContext.tsx
import { createContextId } from "@builder.io/qwik";

export const NoteContext = createContextId<{
  notes: { id: number; text: string }[];
  addNote: (text: string) => void;
  deleteNote: (id: number) => void;
}>("note-context");
