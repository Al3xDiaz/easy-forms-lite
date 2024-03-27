# Form lite
## usage

```ts
import React from "react"
import Form from "form-with-state"
import styled from "styled-components"

const Container = styled.div`
& form{
    display: grid;
    grid-gap: 1rem;
    /* for use grid template areas use "name" property of form item */
    grid-template-areas:
        "firstName LastName"
        "submit submit";
}
`

export const App = ()=>{
    return (
        <Container>
            <Form onSubmit={(data,formData)=>console.log(data)}>
                <Form.TextField label='First Name' required name='firstName' />
                <Form.TextField label='Last Name' required name='lastName' />
                <Form.Submit name='submit' label='login' />
            </Form>
        </Container>
    )
}
/*
Display
    | firstName | lastName |
    | Submit               |
*/
/*
console log:
    {
        "firstName" : "",
        "lastName" : ""
    }
*/
```
