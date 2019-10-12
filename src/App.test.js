import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props}/>);

  if (state) wrapper.setState(state);

  return wrapper;
}

const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
}

test('renders without crashes', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);  
});
  
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');

  expect(button.length).toBe(1);
})

test('renders the counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');

  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');

  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('counter cannot get bellow zero', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'decrement-button');

  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(0);
});

test('shows the error message', () => {
  const error = '';
  const wrapper = setup(null, { error });

  const button = findByTestAttr(wrapper, 'decrement-button');

  button.simulate('click');

  const errorDisplay = findByTestAttr(wrapper, 'error-message');
  expect(errorDisplay.text()).toContain('The counter cannot go bellow zero!');
});

test('remove the error message', () => {
  const error = 'The counter cannot go bellow zero!';
  const wrapper = setup(null, { error });

  const button = findByTestAttr(wrapper, 'increment-button');

  button.simulate('click');

  const errorDisplay = findByTestAttr(wrapper, 'error-message');
  expect(errorDisplay.text()).toContain('');
});
