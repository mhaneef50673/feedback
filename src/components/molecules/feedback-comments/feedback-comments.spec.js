import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { FeedbackComments } from './index';
import { commentList } from './test.data';

describe('Feedback Comments Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <FeedbackComments
        feedbacks={commentList}
        isError={false}
        isFetching={false}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it('should render the component with error', () => {
    const tree = mount(
      <FeedbackComments
        feedbacks={[]}
        isError={true}
        isFetching={false}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it('should render the component with spinner', () => {
    const tree = mount(
      <FeedbackComments
        feedbacks={[]}
        isError={false}
        isFetching={true}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});