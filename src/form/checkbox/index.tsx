import React,{useState,useEffect} from "react";
import { IInput } from "..";
import useFormContext from "../formProvider/useFormContext";

interface Iprops extends IInput {
    initialValue?: boolean;
}

export const CheckBox:React.FC<Iprops> =(props)=>{
    const {
        label,
        name,
        initialValue,
        ...extraProps
    } = props;
    const {state,setProp} = useFormContext();
    const [value,setValue] = useState(initialValue);
    useEffect(()=>{
        setValue(!!state[name] || value)
    },[state,setValue])
    return (
        <label {...extraProps} className="container">
            <input checked={value} type="checkbox" onChange={e=>{setProp({name,value:e.target.checked})}}/>
            <div className="checkmark"></div>
        </label>
    )
}