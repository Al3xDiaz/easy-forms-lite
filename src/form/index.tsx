import React, { CSSProperties, FC, useReducer,} from "react";
import {context,Dictionary,reducer} from "../context";

export interface IInput{
    name: string;
    label?:string,
    required?:boolean,
    placeholder?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
}
type IPersitData ={persistData?: false;} | {persistData: true}

interface IForm{
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:Dictionary,formData:FormData)=>(Promise<void> | void);
    className?: string;
    styles?:CSSProperties;
    initialState: Dictionary;
}
type IFormProps = IForm & IPersitData

const FormState:FC<IFormProps> =  ({initialState,children,className,onSubmit,persistData,styles})=>{
    const [state,dispatch]= useReducer(reducer,{data:initialState,formData:new FormData()});
    const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit && await onSubmit(state.data,state.formData);
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