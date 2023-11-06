import React, { FC, useReducer } from "react";
import context from "./formProvider/context"
import { reducer } from "./formProvider/useReducer";
import styled from "styled-components"

export interface IInput {
    name: string;
}

interface IForm {
    children?: React.JSX.Element | Array<React.JSX.Element>;
    onSubmit? : (data:any)=>void;
}

const FormStyled = styled.form`
  &:after {
    content: " 🦄";
  }
`;

const Form:FC<IForm> =  ({children,onSubmit})=>{
    const [state,dispatch]= useReducer(reducer,{});
    
    return (
       <context.Provider value={{state,dispatch}} >
            <FormStyled onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault(); onSubmit && onSubmit(state);}}>
                <>{children}</>
            </FormStyled>
       </context.Provider>
    )
}

export default Form;