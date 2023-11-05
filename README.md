# Form lite
## usage

```ts
import React from "react"
import Form from "form-lite"

export const app = ()=>{
    return <Form onSubmit={(e)=>console.log}>
        <Form.TextField label='First Name' required name='firstName' />
    </Form.Form>
}
```
