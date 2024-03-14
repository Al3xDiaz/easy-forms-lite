import React,{ FC, useEffect, useState } from 'react'
import {IInput} from "../"
import useFormContext from '../formProvider/useFormContext';
import { Container } from '../../stylesComponents';

interface Iprops extends IInput {
    initialValue?:string;
}

export const TextField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        style,
        className,
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
        <div className={className} style={style}>
            <>
                <Container>
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
                </Container>
            </>
        </div>
    )
}

export const TextArea: FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        style,
        className,
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
        <div className={className} style={style}>
            <Container>
                <textarea
                    className="textarea"
                    required={required}
                    value={value}
                    onChange={e=>{setProp({name,value:e.target.value})}}
                    name={name}
                    {...extraProps}
                />
                <span>{required?"*":""}{props.label?label:props.name}</span>
            </Container>
        </div>
    )
}