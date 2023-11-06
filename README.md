# Form lite
## usage

```ts
import React from "react"
import Form from "form-lite"

export const app = ()=>{
    return <Form onSubmit={(data)=>console.log(data)}>
        <Form.TextField label='First Name' required name='firstName' />
        <Form.Button label='login' />
    </Form>
}
```
