import React from 'react';
import { shallow, mount } from 'enzyme';
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

  describe('when ctrl + h is pressed', () => {
    let alertSpy;

    beforeEach(() => {
      alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
      alertSpy.mockRestore();
    });

    it('calls logOut and alerts "Logging you out"', () => {
      const logOut = jest.fn();
      const wrapper = mount(<App logOut={logOut} />);

      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'h', ctrlKey: true })
      );

      expect(alertSpy).toHaveBeenCalledWith('Logging you out');
      expect(logOut).toHaveBeenCalledTimes(1);

      wrapper.unmount();
    });

    it('does nothing after the component is unmounted', () => {
      const logOut = jest.fn();
      const wrapper = mount(<App logOut={logOut} />);
      wrapper.unmount();

      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'h', ctrlKey: true })
      );

      expect(logOut).not.toHaveBeenCalled();
    });
  });
});
