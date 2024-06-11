import React, { useCallback, useEffect, useState } from "react";
import { Label } from "../../stylesComponents";
import { IInput } from "..";
import { useForm } from "../../hooks";
import styled from "styled-components";

const currentYear = new Date().getFullYear();
const years = Array.from({length: 100},(_,index)=>currentYear-index);
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
interface IProps extends IInput{
};
export const DatePickerFull:React.FC<IProps> = ({name,label,required,...extraProps})=>{
  const {value,setProp} = useForm<Date>(name);
  const handleOnChange =useCallback<React.ChangeEventHandler<HTMLInputElement>>(({target})=>{
    if (!target.valueAsDate) return;
    const day = target.valueAsDate.getUTCDate();
    const monthIndex = target.valueAsDate.getMonth();
    const year = target.valueAsDate.getFullYear()
    const date = new Date(year,monthIndex,day);
    setProp({name,value:date})
  },[setProp])
  const spanText = `${required?"*":""}${label?label:name}`;
  return <Label $name={name}>
    <InputDate required={required} type="date"  $value={value?.toLocaleDateString("es-US")} onChange={handleOnChange} {...extraProps} />
    <span className="label">{spanText}</span>
  </Label>
};
export const DatePicker: React.FC<IProps> = ({name,label})=>{
  const {value,setProp} = useForm<Date>(name);
  const [month,setMonth] = useState(0);
  const [year,setYear] = useState<number>(currentYear);
  const [openMonth,setOpenMonth] = useState(false);
  const handleClickMonth = useCallback((month:number)=>{
    setOpenMonth(false);
    setMonth(month);
  },[setMonth,setOpenMonth])
  const [openYear,setOpenYear] = useState(false);
  const handleClickYear = useCallback((year:number)=>{
    setOpenYear(false);
    setYear(year);
  },[setYear,setOpenYear])
  useEffect(()=>{
    if (!year && !month) return;
    const value = new Date(year,month);
    setProp({name,value})
  },[year,month])


  return (
  <div style={{position:"relative",display:"grid",gridTemplateAreas:'"month year"',gridGap:"2rem",gridArea:name,padding:"1.5rem 0"}}>
    <div style={{
      display:openMonth||openYear?"initial":"none",
      position:"fixed",
      top:0,
      bottom:0,
      left:0,
      right:0,
      zIndex:1,
    }}
      onClick={()=>{
        setOpenMonth(false);
        setOpenYear(false);
      }}
    />
    <span style={{position:"absolute",top:0,left:0,color:"#7c7c7c"}}>{label||name}</span>
    <Label $name="month" onClick={()=>setOpenMonth(!openMonth)}>
      <div style={{padding:".5rem"}}>{monthsOfYear[value?.getMonth()||month]||"--select--"}</div>
      <Menu $open={openMonth}>
        {monthsOfYear.map((item,i)=>(<div key={i} onClick={()=>handleClickMonth(i)}>
          {item}
        </div>))}
      </Menu>
    </Label>
    <Label $name="year" onClick={()=>setOpenYear(!openYear)}>
      <div style={{padding:".5rem"}}>{value?.getFullYear()||year}</div>
      <Menu $open={openYear}>
        {years.map((item,i)=>(<div key={i} onClick={()=>handleClickYear(item)}>
          {item}
        </div>))}
      </Menu>
    </Label>

  </div>
  )
};
const InputDate= styled.input<{$value?:string}>`
  cursor: pointer;
  visibility: hidden;
  &::before {
    position: absolute;
    top: 25%;
    left: .5rem;
    width: 2rem;
    height: 2rem;
    content: '';
    background-image: url('https://api.iconify.design/material-symbols:date-range-sharp.svg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    visibility: visible;
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    visibility: visible;

  }
  &::after {
    position: absolute;
    top: 42%;
    left: 3rem;
    z-index:2;
    width: fit-content;
    height: inherit;
    content: '${props=>props.$value}';
    visibility: visible;
  }
`;
const Menu= styled.div<{$open:boolean}>`
display: ${props=>props.$open?"initial":"none"};
position: absolute;
/* top: 2.5rem; */
border-radius: 10px;
box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
z-index: 2;
height: 20rem;
overflow-y: scroll;
background-color: #fff;

& div {
  padding: .5rem;
}
& div:hover {
  background-color: blue;
}
`;