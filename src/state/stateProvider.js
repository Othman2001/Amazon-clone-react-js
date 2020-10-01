//setup data layer to track basket
import { createContext,useContext, useReducer } from "react";
import React from 'react'
//this is the data layer
export const StateContext = createContext()
//build A provider
export const StateProivder = ({reducer, initialState, children})=>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
//this is how we use it inisde the component 
export const useStateValue = ()=> useContext(StateContext)