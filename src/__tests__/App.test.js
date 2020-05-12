import React from 'react';
import { mount, shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../App';

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});

it('renders app component without crashing', () => {
  shallow(<App />);
});

it('renders entire app without crashing', () => {
  mount(<App />);
});
