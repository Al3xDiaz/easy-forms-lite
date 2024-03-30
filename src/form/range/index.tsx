import React,{ FC } from 'react'
import {IInput} from "../"
import { Label } from '../../stylesComponents';
import { useForm } from '../../hooks';
import styled from 'styled-components';

interface Iprops extends IInput {
    min: number;
    max: number;
}

export const RangeField:FC<Iprops> = (props) => {
    const {
        label="range field",
        required,
        name,
        min,
        max,
        ...extraProps
    } = props;
    const {value,setProp} = useForm<string>(name);
    const spanText = `${required?"*":""}${props.label?label:props.name}`;
    return (
        <Label $name={name} {...extraProps}>
            <Input
                type="range"
                className="input"
                required={required}
                value={value||""}
                onChange={e=>{setProp({name,value:e.target.valueAsNumber})}}
                onBlur={()=>setProp({name,value: value?.trim()})}
                name={name}
                step={1}
                min={min}
                max={max}
                {...extraProps}
            />
            <span>{spanText}</span>
        </Label>
    )
}
const Input = styled.input`
cursor: pointer;
margin: 1rem;
-webkit-appearance: none;
width: 100%;
`