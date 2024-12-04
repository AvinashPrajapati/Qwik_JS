
// src/stores/useNotesStore.ts

import { $, useStore, type QRL } from "@builder.io/qwik";

// Create the note store using `useStore`
type Note = { id: number; text: string };

type CountStore = { 
    notes: Note[]; 
    addNote: QRL<(this: CountStore, text:string) => void>; 
    updateNote: QRL<(this: CountStore, id:number, text:string) => void> ;
    deleteNote: QRL<(this: CountStore, id:number) => void> ;
};

export const useNotesStore = () => {
  const state = useStore<CountStore>({
    notes:[{id:1,text:"asd"}, {id:2,text:"asd"}, {id:3,text:"asd"}],

    addNote:$(function(text:string){
      const newNote = { id: Date.now(), text };
      this.notes = [...this.notes, newNote];
        console.log(([...this.notes]), "addnote");
    }),

    updateNote:$(function(id:number, text:string){
        const note = this.notes.find((note) => note.id === id);
        if (note) {
            note.text = text;
        };
        console.log(([...this.notes]), "updatenote");
    }),

    deleteNote:$(function(id:number){
        this.notes = this.notes.filter((note) => note.id !== id);
        console.log(([...this.notes]), "deletenote");

    }),
  });

return state
};
