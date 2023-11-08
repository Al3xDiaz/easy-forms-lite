# Form lite
## usage

```ts
import React from "react"
import Form from "form-lite"

export const App = ()=>{
    return <Form onSubmit={(data)=>console.log(data)}>
        <Form.TextField label='First Name' required name='firstName' />
        <Form.TextField label='Last Name' required name='lastName' />
        <Form.Submit label='login' />
    </Form>
}
// console log:
// {
//     "firstName" : "",
//     "lastName" : ""
// }
```
