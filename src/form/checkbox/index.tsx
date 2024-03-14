import React,{useState,useEffect} from "react";
import { IInput } from "..";
import useFormContext from "../formProvider/useFormContext";

interface Iprops extends IInput {
    label?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
}

export const CheckBox:React.FC<Iprops> =(props)=>{
    const {
        label,
        name,
        ...extraProps
    } = props;
    const {state,setProp} = useFormContext();
    const [value,setValue] = useState<boolean>(!!state[name]);
    useEffect(()=>{
        setValue(!!state[name])
    },[state,setValue])
    return (
        <label {...extraProps} className="container">
            <input checked={value} type="checkbox" onChange={e=>{setProp({name,value:e.target.value})}}/>
            <div className="checkmark"></div>
        </label>
    )
}