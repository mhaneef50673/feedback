import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';

import CommentView from '../../atoms/comment-view';
import { feedbackSelector, feedbackErrorSelector, feedbackFetchingSelector } from '../../../store/selector';

import './feedback-comments.scss';

const BLOCK_NAME = 'feedback-comments';

const mapStateToProps = state => ({
  feedbacks: feedbackSelector(state),
  isError: feedbackErrorSelector(state),
  isFetching: feedbackFetchingSelector(state),
});

const FeedbackComments = props => {
  const {
    isFetching,
    feedbacks,
    isError,
  } = props;
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Feedbacks</h2>
          <div className={`${BLOCK_NAME}__container`}>
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
                  Error while fetching feedbacks
                </Alert>
              )
            }
            {
              (!isFetching && feedbacks.length > 0) && (
                <ul className="comment-section">
                  {
                    feedbacks.map((comment, index) => (
                      <CommentView key={index} comment={comment} />
                    ))
                  }
                </ul>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, {})(FeedbackComments);