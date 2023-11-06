import React,{ FC } from 'react'
import {IInput} from "../"
import useFormContext from '../formProvider/useFormContext';
import styled from 'styled-components';

const Container =styled.label`
    position: relative;
    display: flex;
    background-color: #ffffff00;

    & .input{
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        margin: .5rem;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
    }
    & .input + span{
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }
    & .input + span + span{
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        right: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: pointer;
        transition: 0.3s ease;
    }
    & .input:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }
    & .input:focus + span,label .input:valid + span {
        top: 3rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .input:valid + span {
        color: green;
    }
    label.invalid .input:invalid + span {
        color: red;
    }


    & .input + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    & .input:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }

    & .input:focus + span,label .input:valid + span {
        top: 3rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .input:valid + span {
        color: green;
    }
    label.invalid .input:invalid + span {
        color: red;
    }

    & .textarea {
        resize: none;
        background-color: #fff;
        width: 100%;
        padding: 1rem;
        margin: .5rem;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
    }

    & .textarea + span {
        position: absolute;
        background-color: #fff;
        border-radius: 1rem;
        padding: .1rem;
        left: 1rem;
        top: 1.5rem;
        color: grey;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    & .textarea:placeholder-shown + span {
        top: 1.5rem;
        font-size: 0.9em;
    }

    & .textarea:focus + span,label .textarea:valid + span {
        top: 4rem;
        font-size: 0.7em;
        font-weight: 600;
    }
    & .textarea:valid + span {
        color: green;
    }
    label.invalid .textarea:invalid + span {
        color: red;
    }
`;

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