import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import LineChart from './index';
import {
  defaultChartOptions,
  chartSeries
} from '../feedback-trend/test.data';

describe('LineChart Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <LineChart
        chartOptions={defaultChartOptions}
        series={chartSeries}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});