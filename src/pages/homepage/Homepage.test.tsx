import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

it('render homepage without crashing', () => {
  const wrapper = shallow(<Homepage />);
  const welcomeMessage = <h1 className="title-welcome">welcome to</h1>;

  expect(wrapper.contains(welcomeMessage)).toEqual(true);
});
