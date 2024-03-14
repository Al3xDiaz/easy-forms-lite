import React from "react";

interface iProps{
    label: string;
    className?:string;
    style?: React.CSSProperties;
}

export const Submit: React.FC<iProps> = ({label,style,className=""})=> {
    return <button
        className={`btn ${className}`}
        type="submit"
        style={style}
    >{label}</button>
}