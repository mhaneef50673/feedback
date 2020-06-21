import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Feedback } from './index';

describe('Feedback Component', () => {
  it('should render the component', () => {
    const tree = shallow(
      <Feedback />
    )
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});