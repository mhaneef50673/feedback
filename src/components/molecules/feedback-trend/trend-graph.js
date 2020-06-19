import React from 'react';
import moment from 'moment';
import LineChart from '../line-chart';
import {
  defaultChartOptions,
  chartSeries,
} from './test.data';

export default class TrendGraph extends React.PureComponent {

  state = {
    options: null,
    series: null,
    chartData: null,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.chartData !== state.chartData && props.chartData.length > 0) {
      const seriesData = [];
      const categories = [];
      props.chartData.forEach(data => {
        seriesData.push(data.count);
        categories.push(moment(data.date).format('DD MMM'));
      });
      const series = [{
        ...chartSeries[0],
        data: seriesData,
      }];
      const options = {
        ...defaultChartOptions,
        xaxis: {
          ...defaultChartOptions.xaxis,
          categories
        },
      };
      return {
        series,
        options,
        chartData: props.chartData,
      }
    }

    return null;
  }

  render() {
    const {
      series,
      options,
    } = this.state;
    return (
      (options && <LineChart chartOptions={options} series={series} />)
    );
  };
}