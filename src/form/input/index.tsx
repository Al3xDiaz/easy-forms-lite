import React,{ FC } from 'react'
import {IInput} from "../"
import { Label } from '../../stylesComponents';
import { useForm } from '../../hooks';

interface Iprops extends IInput {
}

export const TextField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        name,
        ...extraProps
    } = props;
    const {value,setProp} = useForm<string>(name);
    const spanText = `${required?"*":""}${props.label?label:props.name}`;
    return (
        <Label $name={name} {...extraProps}>
            <input
                type="text"
                className="input"
                required={required}
                value={value||""}
                onChange={e=>{setProp({name,value:e.target.value})}}
                onBlur={()=>setProp({name,value: value?.trim()})}
                name={name}
                {...extraProps}
            />
            <span className='label'>{spanText}</span>
        </Label>
    )
}

export const TextArea: FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        name,
        ...extraProps
    } = props;
    const {value,setProp} = useForm<string>(name);
    return (
        <Label $name={name} {...extraProps}>
            <textarea
                className="textarea"
                required={required}
                value={value||""}
                onChange={e=>{setProp({name,value:e.target.value})}}
                onBlur={()=>setProp({name,value: value?.trim()})}
                name={name}
                {...extraProps}
            />
            <span className='label'>{required?"*":""}{props.label?label:props.name}</span>
        </Label>
    )
}