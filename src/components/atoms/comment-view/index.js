import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './comment-view.scss';

const BLOCK_NAME = 'comment';

const CommentView = props => {
  const { comment } = props;
  const starCount = +comment.rating;
  const stars = [];
  for (var i = 0; i < starCount; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
  }
  return (
    <li className={`${BLOCK_NAME} user-comment`}>
      <div className="info">
        <a>{comment.name}</a>
        <span>{moment(comment.createdDateTime).format('MMM DD h:mm A')}</span>
      </div>
      <div className="comment-view">
        <p>{comment.comment}</p>
        <div className="custom-row">
          <span className="rating-text">
            Rating
          </span>
          <span className="rating-star">
            {stars}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CommentView