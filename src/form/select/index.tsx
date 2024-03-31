import React,{ FC } from 'react'
import {IInput} from "../"
import { Label } from '../../stylesComponents';
import { useForm } from '../../hooks';
import styled from 'styled-components';

interface Iprops extends IInput {
    children?: JSX.Element | JSX.Element[]
}

export const SelectField:FC<Iprops> = (props) => {
    const {
        label="textfield",
        required,
        name,
        children,
        ...extraProps
    } = props;
    const {value,setProp} = useForm<string>(name);
    return (
        <Label $name={name} {...extraProps}>
            <Select
                onChange={({target})=>{
                    setProp({name,value:target.value})
                }}
                value={value}
            >
                <Option value={0}>{name}</Option>
                {children}
            </Select>
        </Label>
    )
}

const Select = styled.select`
box-sizing: border-box;
width: 100%;
background-color: #fff;
border-radius: 10px;
padding: .5rem;

appearance: none;
border: none;
margin: 0;
font-family: inherit;
font-size: inherit;
cursor: pointer;
line-height: inherit;
outline: none;

& ::after, & ::before {
    box-sizing: border-box;
}
& ::-ms-expand {
    display: none;
}
& * {
    cursor: pointer !important;
}
`;
export const Option = styled.option`
cursor: pointer;
text-indent: .5rem;

-webkit-appearance: button;
-webkit-border-radius: 2px;
-webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
-webkit-padding-end: 20px;
-webkit-padding-start: 2px;
-webkit-user-select: none;
background-image: url(../images/select-arrow.png),
-webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
background-position: center right;
background-repeat: no-repeat;
border: 1px solid #AAA;
color: #555;
font-size: inherit;
margin: 0;
overflow: hidden;
padding-top: 2px;
padding-bottom: 2px;
text-overflow: ellipsis;
white-space: nowrap;
`;