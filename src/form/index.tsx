import React, { FC, useReducer } from "react";
import context from "./formProvider/context"
import { reducer } from "./formProvider/useReducer";

import {TextArea,TextField} from "./input"
import {PasswordField} from "./password"
import {Button} from "./btn"

import "./index.css"

export interface IInput {
    name: string;
}

interface IForm {
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:any)=>void;
}


const Form:FC<IForm> =  ({children,onSubmit})=>{
    const [state,dispatch]= useReducer(reducer,{});
    
    return (
       <context.Provider value={{state,dispatch}} >
            <form onSubmit={(e)=>{e.preventDefault(); onSubmit && onSubmit(state);}}>
                <>{children}</>
            </form>
       </context.Provider>
    )
}

export default {
    Form,
    TextArea,
    TextField,
    PasswordField,
    Button
}