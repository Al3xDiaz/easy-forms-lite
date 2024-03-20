import React from "react";
import { Button, Label } from "../../stylesComponents";

interface iProps{
    label: string;
    className?:string;
    style?: React.CSSProperties;
    name?:string;
}

export const Submit: React.FC<iProps> = ({label,name,...extraProps})=> {
    return <Label {...extraProps} id={name}>
        <Button
        name={name}
        className={`btn`}
        type="submit"
    >{label}</Button>
    </Label>
}