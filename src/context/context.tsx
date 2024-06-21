import React  from "react";
import {IAction} from "./reducer";

export interface Dictionary{
  [Key: string]: any;
}
export interface IContextState{
  data:Dictionary;
  formData: FormData;
  status: "ready" | "loading" | "error";
}
export interface IContext{
  state: IContextState;
  dispatch?: React.Dispatch<IAction>;
}
export const initialState: IContext = {
  state:{
    data:{},
    formData:new FormData(),
    status: "ready"
  }
};
export const context =React.createContext<IContext>(initialState);

export default context;