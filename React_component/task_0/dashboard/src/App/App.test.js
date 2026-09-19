import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the welcome heading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to the Dashboard');
  });
});
