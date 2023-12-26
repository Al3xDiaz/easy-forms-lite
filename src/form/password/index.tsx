import React,{ FC, useEffect, useState } from 'react'
import {IInput} from ".."
import useFormContext from "../formProvider/useFormContext";
import { Container } from '../../stylesComponents';

interface Iprops extends IInput {
    label?:string,
    required?:boolean,
    placeholder?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
}

export const PasswordField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        style,
        className,
        name,
        ...extraProps
    } = props;
    const [showText,setShowText] = useState(false)
    const {state,getProp,setProp} = useFormContext();
    const [value,setValue] = useState<string>();
    useEffect(()=>{
        setValue(getProp<string>(name))
    },[state,setValue])
    const spanText = `${required?"*":""}${props.label?label:props.name}`;
    return (
        <div className={className} style={style}>
            <Container>
                <input
                    type={showText?"text":"password"}
                    className="input"
                    required={required}
                    value={value}
                    onChange={e=>{setProp({name,value:e.target.value})}}
                    name={name}
                    {...extraProps}
                />
                <span>{spanText}</span>
                <span onClick={()=>setShowText(!showText)}>
                {showText?<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.11 127.11 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm89 121.69a32 32 0 0 1-41.67-45.85Zm104.39-25.05c-.42.94-10.55 23.37-33.36 43.8a8 8 0 0 1-11.26-.57L101.4 63.07a8 8 0 0 1 4.6-13.28A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"/></svg>}
                </span>
            </Container>
        </div>
    )
}
