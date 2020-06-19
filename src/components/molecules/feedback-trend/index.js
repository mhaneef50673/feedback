import React from 'react';
import TrendGraph from './trend-graph';
import {
  chartData,
} from './test.data';

const BLOCK_NAME = 'feedback-trend';

const FeedbackTrend = props => {
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Feedback Trend</h2>
          <TrendGraph chartData={chartData} />
        </div>
      </div>
    </div>
  )
};

export default FeedbackTrend;