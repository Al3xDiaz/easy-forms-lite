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

const FormState:FC<IForm> =  (props)=>{
    const {initialValues={}} = props;
    const [state,dispatch]= useReducer(reducer,initialValues);
    return (
        <context.Provider value={{state,dispatch}}>
            <Form {...props} />
       </context.Provider>
    )
}
const Form:FC<IForm> = ({children,className,onSubmit,persistData,styles})=>{
    const {state,dispatch} = useContext(context);
    const HandleSubmit = useCallback(async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit && await onSubmit(state);
        if(!persistData){
            dispatch && dispatch({type:"SET_EMPTY"});
        }
    },[])
    return (
        <form aria-label="form" className={className} style={styles} onSubmit={HandleSubmit}>
            <>{children}</>
        </form>
    )
}

export default FormState;