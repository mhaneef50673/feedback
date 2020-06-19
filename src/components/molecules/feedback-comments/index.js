import React from 'react';
import CommentView from '../../atoms/comment-view';

import './feedback-comments.scss';
import {
  commentList
} from './test.data';

const BLOCK_NAME = 'feedback-comments';

const FeedbackComments = props => {
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Feedbacks</h2>
          <div className={`${BLOCK_NAME}__container`}>
            <ul className="comment-section">
              {
                commentList.map((comment, index) => (
                  <CommentView key={index} comment={comment} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FeedbackComments;