import React from "react";
import { Button, Label } from "../../stylesComponents";

interface iProps{
    name:string;
    label?: string;
    className?:string;
    style?: React.CSSProperties;
}

export const Submit: React.FC<iProps> = ({label,name,...extraProps})=> {
    return <Label $name={name} {...{style:{border:"none"},...extraProps}}>
        <Button
        name={name}
        className={`btn`}
        type="submit"
    >{label||name}</Button>
    </Label>
}