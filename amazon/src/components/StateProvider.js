//setup data layer
// we need this to track the basket

import { createContext, useReducer, useContext } from "react";

// This is data layer
export const StateContext = createContext();

// Build a Provider 

export const StateProvider = ({ reducer, initState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initState)}> 
        {children}
    </StateContext.Provider>
)


export const useStateValue = () =>  useContext(StateContext)