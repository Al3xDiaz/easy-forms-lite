import React, { CSSProperties } from "react";
import styled from "styled-components";
import { useForm, useFormData } from "../../hooks";

interface IPropsImage{
  name:string;
  style?: CSSProperties;
  type:"file"|"dataUrl";
}
interface IPropsGeneric{
  name:string;
  style?: CSSProperties;
  multiple?:boolean;
}

export const FileGeneric:React.FC<IPropsGeneric>=({name,style,multiple})=>{
  const {appendData,value} = useFormData(name);
  const handleOnChange:React.ChangeEventHandler<HTMLInputElement> =({target,})=>{
    !!target.files && appendData({name,value:target.files});
  }
  return (
    <Label style={style} $name={name}>
      <div className="icon">
      <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" />
        </g>
      </svg>
      </div>
      <div className="text">
      <span>{!!value.length?`upload ${value.length} file(s)`:"Click to upload image"}</span>
      </div>
      <input type="file" multiple={multiple} onChange={handleOnChange} />
    </Label>
  )
}
export const FileImage:React.FC<IPropsImage>=({name,type="dataUrl",style})=>{
  const {appendData,} = useFormData(name);
  const {setProp,value} = useForm<string>(name);
  const handleOnChange:React.ChangeEventHandler<HTMLInputElement> =({target,})=>{
    if (!target.files) return;
    switch (type) {
      case "file":
        appendData({name,value:target.files});
        break;
      case "dataUrl":
        const file = target.files[0];
         const reader = new FileReader();
         reader.onloadend = () => {
          setProp({name,value:reader.result})
         };
         reader.readAsDataURL(file);
         break;
      default:
        break;
    }
  }
  return (
    <Label style={{...style,backgroundImage:`url(${value})`}} $name={name}>
      <div className="icon" style={{display:!!value?"none":"initial"}} >
        <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="currentColor" d="M11.93 11a3 3 0 1 0-3 3a3 3 0 0 0 3-3m-4.6 0a1.6 1.6 0 1 1 1.6 1.6a1.6 1.6 0 0 1-1.6-1.6" className="clr-i-outline--badged clr-i-outline-path-1--badged"/>
          <path fill="currentColor" d="m17.38 20.77l-4-4a1 1 0 0 0-1.41 0L5.92 22.9v2.83l6.79-6.79L16 22.18l-3.75 3.75H15l8.45-8.45L30 24v-2.82l-5.81-5.81a1 1 0 0 0-1.41 0Z" className="clr-i-outline--badged clr-i-outline-path-2--badged"/><path fill="currentColor" d="M32 13.22V30H4V6h18.5a7.49 7.49 0 0 1 .28-2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.45 7.45 0 0 1-2 .88" className="clr-i-outline--badged clr-i-outline-path-3--badged"/><circle cx="30" cy="6" r="5" fill="currentColor" className="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/><path fill="none" d="M0 0h36v36H0z"/>
        </svg>
      </div>
      <input type="file" onChange={handleOnChange} />
    </Label>
  )
}
const Label = styled.label<{$name:string}>`
  grid-area: ${({$name})=>$name};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #e8e8e8;
  background-color: var(--background,#a3a3a3);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 1rem .7rem -1rem #e8e8e8;
  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .icon svg {
    height: 4rem;
    fill: #e8e8e8;
  }
  & .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .text span {
    font-weight: 400;
    color: #e8e8e8;
  }
  &  input {
    display: none;
  }
`;