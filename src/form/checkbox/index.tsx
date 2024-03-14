import React from "react";
import { IInput } from "..";
import { Label } from "../../stylesComponents";
import { useForm } from "../hooks";

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
    const {value,setProp} = useForm<boolean>({name,value:!!initialValue});
    return (
        <Label {...extraProps}>
            <input checked={value} type="checkbox" onChange={e=>{setProp({name,value:e.target.checked})}}/>
            <div className="checkmark"></div>
        </Label>
    )
}