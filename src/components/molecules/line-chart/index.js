import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { shape } from 'prop-types';

/**
 * Renders the LineChart
 * @param {*} chartOptions chart options
 * @param {*} series line chart series
 */
export default class LineChart extends React.Component {

  render() {
    const {
      chartOptions,
      series,
    } = this.props;
    return (
      <ReactApexChart options={chartOptions} series={series} type="line" height={350} />
    )
  }
};

LineChart.propTypes = {
  chartOptions: shape({}),
  series: shape({}),
};
