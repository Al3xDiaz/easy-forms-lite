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
    <Form onSubmit={HandleSubmit}>
      <Form.TextField name='username' initialValue={state.username} />
      <Form.PasswordField name='password' initialValue={state.password} />
      <Form.TextArea name='description' initialValue={state.description} />
      <Form.CheckBox name='isStaff' initialValue={true} />
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
    <Form onSubmit={onSubmit}>
      <Form.TextField name='username' initialValue={initState.username} />
      <Form.PasswordField name='password' initialValue={initState.password} />
      <Form.TextArea name='description' initialValue={initState.description} />
      <Form.CheckBox name='isStaff' initialValue={true} />
      <Form.Submit label='submit' />
    </Form>
  )
  act(()=>{
    fireEvent.submit(getByRole("form"));
  })
  expect(onSubmit).toHaveBeenCalled();
})