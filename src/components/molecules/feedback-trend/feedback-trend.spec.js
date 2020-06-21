import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import { FeedbackTrend } from './index';
import {
  chartData,
} from './test.data';

describe('FeedbackTrend Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <FeedbackTrend
        feedbackTrendData={chartData}
        isError={false}
        isFetching={false}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it('should render the component with error', () => {
    const tree = mount(
      <FeedbackTrend
        feedbackTrendData={chartData}
        isError={true}
        isFetching={false}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
  it('should render the component with spinner', () => {
    const tree = mount(
      <FeedbackTrend
        feedbackTrendData={chartData}
        isError={false}
        isFetching={true}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});