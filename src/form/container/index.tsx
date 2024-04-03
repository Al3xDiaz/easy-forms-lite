import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowDown } from "../../components"

interface IProps {
  id: string;
  style?:CSSProperties;
  label?:string;
  children?: JSX.Element | JSX.Element[] | string;
}

export const Container:React.FC<IProps>=({id,style,label="label",children})=>{
  const [open,setOpen] =useState(false);
  useEffect(()=>{
    const item =localStorage.getItem(id);
    setOpen(/^true$/.test(item||""));
  },[setOpen])
  useEffect(()=>{
    const item = JSON.stringify(open);
    localStorage.setItem(id,item);
  })
  return (
    <Paper style={style}>
      <div className="head" onClick={()=>{setOpen(!open)}}>
        {label}
        <span><ArrowDown style={{transform:open?"rotate(180deg)":""}} /></span>
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
background-color: var(--dark-backgrund, var(--background, #fff));
padding: 0 2rem;

& .head {
  cursor: pointer;
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
  right: 1rem;
}
`