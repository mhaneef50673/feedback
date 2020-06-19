import React from 'react';

import './feedback-form.scss';

const BLOCK_NAME = 'feedbackform';

const FeedbackForm = props => {
  return (
    <div className={BLOCK_NAME}>
      <div className="panel-wrapper">
        <div className="panel-container">
          <h2>Feedback Form</h2>
        </div>
      </div>
    </div>
  )
};

export default FeedbackForm;