import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form } from '../src';

export const App = ()=>{
  return <Form onSubmit={async(data)=>console.log(data)}>
      <Form.TextField label='First Name' required name='firstName' />
      <Form.FileGeneric name="resume" />

      <Form.Submit label='login' />
  </Form>
}

ReactDOM.render(<App />, document.getElementById('root'));
