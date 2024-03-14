import React from "react";
import { Button, Label } from "../../stylesComponents";

interface iProps{
    label: string;
    className?:string;
    style?: React.CSSProperties;
}

export const Submit: React.FC<iProps> = ({label,...extraProps})=> {
    return <Label {...extraProps}>
        <Button
        className={`btn`}
        type="submit"
    >{label}</Button>
    </Label>
}