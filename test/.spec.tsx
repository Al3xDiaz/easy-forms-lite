import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../src';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Form onSubmit={console.log}></Form>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});