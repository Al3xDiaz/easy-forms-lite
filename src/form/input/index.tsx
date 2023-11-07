import React,{ FC } from 'react'
import {IInput} from "../"
import useFormContext from '../formProvider/useFormContext';
import { Container } from '../../stylesComponents';

interface Iprops extends IInput {
    label?:string,
    required?:boolean,
    placeholder?:string,
    style?:React.StyleHTMLAttributes<HTMLStyleElement>,
    className?:string,
}

export const TextField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        style,
        className,
        name,
        ...extraProps
    } = props;
    const {setProp,state} = useFormContext();
    const value:string =state[name] ? String(state[name]) : "";
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
        ...extraProps
    } = props;
    const {setProp,state} = useFormContext()
    return (
        <div className={className} style={style}>
            <Container>
                <textarea
                    className="textarea"
                    required={required}
                    value={state[name] as string}
                    onChange={e=>{setProp({name,value:e.target.value})}}
                    name={name}
                    {...extraProps}
                />
                <span>{required?"*":""}{props.label?label:props.name}</span>
            </Container>
        </div>
    )
}