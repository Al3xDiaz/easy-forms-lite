import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form } from '../.';

export const App = ()=>{
  return <Form onSubmit={(data)=>console.log(data)}>
      <Form.TextField label='First Name' required name='firstName' />
      <Form.Button label='login' />
  </Form>
}

ReactDOM.render(<App />, document.getElementById('root'));
