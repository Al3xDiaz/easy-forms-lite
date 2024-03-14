import React,{ FC, useEffect, useState } from 'react'
import {IInput} from "../"
import useFormContext from '../formProvider/useFormContext';
import { Label } from '../../stylesComponents';

interface Iprops extends IInput {
    initialValue?:string;
}

export const TextField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        name,
        initialValue,
        ...extraProps
    } = props;
    const {state,setProp} = useFormContext();
    const [value,setValue] = useState(initialValue);
    useEffect(()=>{
        setValue(state[name] && String(state[name]) || value)
    },[state,setValue])
    const spanText = `${required?"*":""}${props.label?label:props.name}`;
    return (
        <Label {...extraProps}>
            <input
                type="text"
                className="input"
                required={required}
                value={value}
                onChange={e=>{setProp({name,value:e.target.value})}}
                name={name}
                {...extraProps}
            />
            <span>{spanText}</span>
        </Label>
    )
}

export const TextArea: FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        name,
        initialValue,
        ...extraProps
    } = props;
    const {setProp,state} = useFormContext()
    const [value,setValue] = useState(initialValue);
    useEffect(()=>{
        setValue(state[name] && String(state[name]) || "")
    },[state,setValue])
    return (
        <Label {...extraProps}>
            <textarea
                className="textarea"
                required={required}
                value={value}
                onChange={e=>{setProp({name,value:e.target.value})}}
                name={name}
                {...extraProps}
            />
            <span>{required?"*":""}{props.label?label:props.name}</span>
        </Label>
    )
}