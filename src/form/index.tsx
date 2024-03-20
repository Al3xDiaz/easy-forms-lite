import React, { CSSProperties, FC, useReducer,} from "react";
import {context,IState} from "../context"
import { reducer } from "../hooks";

export interface IInput{
    name: string;
    label?:string,
    required?:boolean,
    placeholder?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
    initialValue?: string | number | boolean | Date;
}

interface IForm{
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:IState)=>Promise<void>;
    persistData?: boolean;
    className?: string;
    styles?:CSSProperties;
}

const FormState:FC<IForm> =  ({children,className,onSubmit,persistData,styles})=>{
    const [state,dispatch]= useReducer(reducer,{data:{},formData:new FormData()});
    const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit && await onSubmit(state);
        if(!persistData){
            dispatch && dispatch({type:"SET_EMPTY"});
        }
    }
    return (
        <context.Provider value={{state,dispatch}}>
            <form aria-label="form" className={className} style={styles} onSubmit={HandleSubmit}>
                <>{children}</>
            </form>
       </context.Provider>
    )
}

export default FormState;