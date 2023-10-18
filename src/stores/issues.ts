import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useIssuesStore = defineStore('issues',() => {


  const state = ref<number>(0);
  const label  = ref<string[]>([]);

  return {
    //states
    state,
    label,


    //getters


    //actions
    toggleLabel(label:string){
      console.log(label);
      // to do Implement
    },


  }
});
