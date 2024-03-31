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
    const {value,setProp} = useForm<number>(name);
    const spanText = `${required?"*":""}${props.label?label:props.name}`;
    return (
        <Label $name={name} {...extraProps}>
            <Input
                type="range"
                className="input"
                required={required}
                value={value||min}
                onChange={e=>{setProp({name,value:e.target.valueAsNumber})}}
                name={name}
                step={1}
                min={min}
                max={max}
                {...extraProps}
            />
            <span>{spanText}</span>
            <p>{` ${(value||min)/max*100}%`}</p>
        </Label>
    )
}
const Input = styled.input`
cursor: pointer;
margin: 1rem;
-webkit-appearance: none;
appearance: none;
&::-webkit-slider-runnable-track {
  background: #053a5f;
  height: 0.5rem;
}
&::-moz-range-track {
  background: var(--primary,#053a5f);
  height: 0.5rem;
}
&::-webkit-slider-thumb {
   -webkit-appearance: none; /* Override default look */
   appearance: none;
   margin-top: -.25rem; /* Centers thumb on the track */
   background-color: #ffffff;
   border: 1px solid var(--primary,#053a5f);
   border-radius: 1rem;
   height: 1rem;
   width: 1rem;
}
`;