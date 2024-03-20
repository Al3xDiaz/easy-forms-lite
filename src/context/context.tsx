import React  from "react";
import IAction from "./reducer";

export interface Dictionary{
    [Key: string]: any;
}
export interface IState{
    data:Dictionary,
    formData: FormData;
}
export interface IContextState{
    state: IState;
    dispatch?: React.Dispatch<IAction>;
}
export const initialState = {state:{data:{},formData:new FormData()}};
export const context =React.createContext<IContextState>(initialState);

export default context;