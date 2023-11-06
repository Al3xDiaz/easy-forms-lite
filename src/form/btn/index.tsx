import React from "react";

interface iProps{
    label: string;
    style?: React.CSSProperties;
}

export const Submit: React.FC<iProps> = ({label,style})=> {
    return <button
        type="submit"
        style={{
            border:"none",
            outline:"none",
            backgroundColor:"royalblue",
            padding: 10,
            borderRadius:10,
            color:"#fff",
            fontSize:16,
            transform: ".3s ease",
            width:"100%",
            alignSelf:"end",
            ...style
        }}
    >{label}</button>
}