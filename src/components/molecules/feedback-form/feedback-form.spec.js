import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import FeedbackForm from './index';

describe('Feedback Form Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <FeedbackForm
        saveFeedback={jest.fn()}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});