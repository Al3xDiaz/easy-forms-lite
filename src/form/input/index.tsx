import React,{ FC } from 'react'
import {IInput} from "../"
import { Label } from '../../stylesComponents';
import { useForm } from '../hooks';

interface Iprops extends IInput {
    initialValue?:string;
}

export const TextField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        name,
        initialValue="",
        ...extraProps
    } = props;
    const {value,setProp} = useForm<string>({name,value:initialValue});
    const spanText = `${required?"*":""}${props.label?label:props.name}`;
    return (
        <Label id={name} {...extraProps}>
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
        initialValue="",
        ...extraProps
    } = props;
    const {value,setProp} = useForm<string>({name,value:initialValue});
    return (
        <Label id={name} {...extraProps}>
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