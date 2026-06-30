import { createSlice } from "@reduxjs/toolkit";

/**
 * Raggruppa in un unico posto:
 * -Il nome della slice
 * -Lo stato iniziale
 * -I reducer (le funzioni che modificano lo stato)
 * Inoltre, genera automaticamente le action creator Con lo stesso nome del reducer 
 */
const counterSlice = createSlice({

    name: 'counter',//Prefisso usato nei nomi delle Action.
    initialState: { value: 0 },//stato iniziale di questo slice
    
    reducers: {
        // Qui dentro metterai tutti i reducer 
        // Ognuno di essi riceverà state e action Come parametri E descriverà come deve cambiare lo Stato 
        //Sarà redax toolkit A modificare internamente lo Stato (In realtà non lo modifica, ma lo sostituisce poiché è immutabile.)

        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        reset: (state) => {state.value = 0},

        //action.payload Contiene il valore passato quando si fa dispatch(addAmount(10))
        addAmount: (state, action) => {state.value += action.payload}
    }
})

//Eportiamo le action creators generata da Create slice
export const { increment, decrement, reset, addAmount} = counterSlice.actions

//Esportiamo il reducer da collegare allo store 
export default counterSlice.reducer//cioè counter + Reducer