import React, { useCallback } from "react";
import { Label } from "../../stylesComponents";
import { IInput } from "..";
import { useForm } from "../hooks";
import styled from "styled-components";
interface IProps extends IInput{
  initialValue?:Date;
}
export const DatePicker:React.FC<IProps> = ({name,label,required,initialValue=new Date()})=>{
  const {value,setProp} = useForm<Date>({name,value:initialValue});
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
    <InputDate type="date"  $value={value?.toLocaleDateString("es-US")} onChange={handleOnChange} />
    <span>{spanText}</span>
  </Label>
}
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
    z-index: 1;
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
`