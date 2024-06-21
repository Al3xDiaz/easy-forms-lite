import React, { CSSProperties, FC, useReducer, } from "react";
import {context,Dictionary,reducer} from "../context";
import styled from "styled-components";

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
  initialState?: Dictionary;
}
type IFormProps = IForm & IPersitData

const FormState:FC<IFormProps> =  ({initialState={},children,className,onSubmit,persistData,styles})=>{
  const [state,dispatch]= useReducer(reducer,{data:initialState,formData:new FormData(),status:"ready"});
  const HandleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    try {
      dispatch({type:"SET_STATUS",payload:"loading"})
      e.preventDefault();
      onSubmit && await onSubmit(state.data,state.formData);
      if(!persistData){
        dispatch && dispatch({type:"SET_EMPTY"});
      }
      dispatch({type:"SET_STATUS",payload:"ready"})
    } catch (error) {
      dispatch({type:"SET_STATUS",payload:"error"})
    }
  }
  return (
    <context.Provider value={{state,dispatch}}>
      <Form aria-label="form" className={`${className || ""} ${state.status}`} style={styles} onSubmit={HandleSubmit}>
        <>{children}</>
      </Form>
    </context.Provider>
  )
}

const Form = styled.form`
  & button:disabled {
    background-color: rgb(90, 90, 90);
  }
  & button:disabled::after {
    background-color: rgb(121, 121, 121);
  }
  &.ready label button .loading {
    display: none;
  }
  &.loading button span.icon-right {
    position: absolute;
    top: .5rem;
    right: .1rem;
    width: 2rem;
    height: 2rem;
  }
  & {
    display: grid;
    grid-template-areas: "mames mames" "send ." ;
    gap: 1rem;
  }
`;
export default FormState;