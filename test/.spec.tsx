import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render,fireEvent,} from '@testing-library/react';
import Form from '../src';

it('create form with initial props', () => {
  let state={
    username:"anuser",
    password:"1234",
    description:"this is a description"
  }
  const HandleSubmit =async (data:any)=>{
    expect(state).toEqual(data)
  }
  const component = renderer.create(
    <Form initialValues={state} onSubmit={HandleSubmit}>
      <Form.TextField name='username' />
      <Form.PasswordField name='password' />
      <Form.TextArea name='description' />
      <Form.TextArea name='description' />
      <Form.Submit label='submit' />
    </Form>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('create form with initial props',()=>{
  let initState={
    username:"anuser",
    password:"1234",
    description:"this is a description"
  }
  const onSubmit = jest.fn();
  const { getByRole } = render(
      <Form initialValues={initState} onSubmit={onSubmit}>
        <Form.TextField name='username' />
        <Form.PasswordField name='password' />
        <Form.TextArea name='description' />
        <Form.TextArea name='description' />
        <Form.Submit label='submit' />
      </Form>
  )
  act(()=>{
    fireEvent.submit(getByRole("form"));
  })
  expect(onSubmit).toHaveBeenCalled();
})