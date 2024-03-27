import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import { ArrowDown } from "../../components"

interface IProps {
  style?:CSSProperties;
  label?:string;
  children?: JSX.Element | JSX.Element[]

}

export const Container:React.FC<IProps>=({style,label="label",children})=>{
  const [open,setOpen] =useState(false);
  return (
    <Paper style={style}>
      <div className="head">
        {label}
        <span onClick={()=>{setOpen(!open)}}><ArrowDown style={{transform:open?"rotate(180deg)":""}} /></span>
      </div>
      {open&&<div>
        {children}
      </div>}
    </Paper>
  )
}

const Paper = styled.div<{$label?:string;}>`
position: relative;
display: flex;
flex-direction:column;
border-bottom: 1px solid #000;

& .head {
  display: flex;
  align-items: center;
}
& div {
  padding: .5rem 0;
}

& .head span{
  border: 1px solid #000;
  border-radius: 100%;
  padding: .1rem .25rem;
  position: absolute;
  right: 0;
  cursor: pointer;
}
`