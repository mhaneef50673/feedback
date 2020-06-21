import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { shape } from 'prop-types';
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
