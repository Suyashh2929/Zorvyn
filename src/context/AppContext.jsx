import { createContext } from "react";
import { screener } from "../assets/frontend/assets";

export const DocContext= createContext();

const AppContextProvider=(props)=>{


    const value={
        screener
    }

    return(
        <DocContext.Provider value={value}>
                {props.children}
        </DocContext.Provider>
    )
}

export default AppContextProvider