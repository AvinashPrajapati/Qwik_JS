

import { useStore, $, type QRL } from "@builder.io/qwik";
 
type CountStore = { 
  count: number; 
  increment: QRL<(this: CountStore) => void>,
  
  list: String[],
  addNote: QRL<(this: CountStore, title:String) => void>,
  delNote: QRL<(this: CountStore, title:String) => void>,
  
  };

export const useNotesStore = () => {
    return useStore<CountStore>({
    count: 0,
    increment: $(function (this: CountStore) {
      this.count++;
    }), 
    list: [],
    addNote: $(function (title) {
      this.list.push(title);
    }),
    delNote: $(function (title) { 
      this.list = this.list.filter((item, _) => item !== title);
    }),
  });

}