import React, { CSSProperties, FC, useReducer,useContext, useCallback } from "react";
import context from "./formProvider/context"
import { reducer } from "./formProvider/useReducer";

export interface IInput{
    name: string;
}

interface IForm{
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:any)=>Promise<void>;
    initialValues?: any;
    persistData?: boolean;
    className?: string;
    styles?:CSSProperties;
}

const FormState:FC<IForm> =  ({children,className,initialValues,onSubmit,persistData,styles})=>{
    const [state,dispatch]= useReducer(reducer,initialValues);
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