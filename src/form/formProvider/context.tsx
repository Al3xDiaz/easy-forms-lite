import React  from "react";
import IAction from "./reducer";

export interface Dictionary{
    [Key: string]: any;
}
export interface IContextState{
    state: Dictionary;
    dispatch?: React.Dispatch<IAction>;
}

const contex =React.createContext<IContextState>({state:{}});

export default contex;