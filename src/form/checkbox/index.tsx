import React from "react";
import { IInput } from "..";
import { Label } from "../../stylesComponents";
import { useForm } from "../../hooks";

interface Iprops extends IInput {
}

export const CheckBox:React.FC<Iprops> =(props)=>{
    const {
        label,
        name,
        ...extraProps
    } = props;
    const {value,setProp} = useForm<boolean>(name);
    return (
        <Label {...extraProps} $name={name} style={{outline:"none",padding:".8rem"}}>
            <input checked={value} type="checkbox" onChange={e=>{setProp({name,value:e.target.checked})}}/>
            <div className="checkmark"></div>
            {!!props.label&&<span>{props.label}</span>}
        </Label>
    )
}