



// import { component$, useStore, $, type QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { useNotesStore } from "~/store";
 
// type CountStore = { 
//   count: number; 
//   increment: QRL<(this: CountStore) => void>,
  
//   list: String[],
//   addNote: QRL<(this: CountStore, title:String) => void>,
//   delNote: QRL<(this: CountStore, title:String) => void>,
  
//   };
 
export default component$(() => {
//   const state = useStore<CountStore>({
//     count: 0,
//     increment: $(function (this: CountStore) {
//       this.count++;
//     }), 
//     list: [],
//     addNote: $(function (title) {
//       this.list.push(title);
//     }),
//     delNote: $(function (title) { 
//       this.list = this.list.filter((item, _) => item !== title);
//     }),
//   });

const state = useNotesStore();
 
  return (
    <>
      <button onClick$={() => state.increment()}>Increment</button>
      <p>Count: {state.count}</p>
      //----- 
      <br />
      <button
        onClick$={() => {state.addNote(`Item ${state.list.length + 1}`)}}
      >
        Add to list
      </button>
      <ul>
        {state.list.map((item, key) => (
          <li key={key}>{item.toString()} 
              <button
                onClick$={() => state.delNote(item)}
              >
                x
              </button>
          </li>
        ))}
      </ul>
    </>
  );
});