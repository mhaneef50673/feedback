import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';
import PropTypes, { shape } from 'prop-types';

import TrendGraph from './trend-graph';
import {
  feedbackTrendSelector,
  feedbackTrendErrorSelector,
  feedbackTrendFetchingSelector
} from '../../../store/selector';

const BLOCK_NAME = 'feedback-trend';

const mapStateToProps = state => ({
  feedbackTrendData: feedbackTrendSelector(state),
  isError: feedbackTrendErrorSelector(state),
  isFetching: feedbackTrendFetchingSelector(state),
});

/**
 * Renders the Feedback Trend graph section
 * @param {*} isFetching boolean which indicates data is being fetched
 * @param {*} isError boolean which if there is a error occured during api call
 * @param {*} feedbackTrendData Array of feedbacks trend data
 */
export const FeedbackTrend = props => {
  const {
    isFetching,
    feedbackTrendData,
    isError,
  } = props;
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Feedback Trend</h2>
          {
            isFetching && (
              <div className="center">
                <FontAwesomeIcon icon={faSpinner} className="centered-icon" />
              </div>
            )
          }
          {
            isError && (
              <Alert variant="danger">
                Error while fetching feedback trend data
                </Alert>
            )
          }
          {
            (!isFetching && feedbackTrendData.length > 0) && (
              <TrendGraph chartData={feedbackTrendData} />
            )
          }
        </div>
      </div>
    </div>
  )
};

FeedbackTrend.propTypes = {
  isError: PropTypes.bool,
  isFetching: PropTypes.bool,
  feedbackTrendData: PropTypes.arrayOf(shape({
    date: PropTypes.string,
    count: PropTypes.number,
  })),
}

export default connect(mapStateToProps, {})(FeedbackTrend);