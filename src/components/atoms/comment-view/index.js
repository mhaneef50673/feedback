import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './comment-view.scss';

const BLOCK_NAME = 'comment';

/**
 * Renders the Individual comment in feedback comments section
 * @param {*} comment comment object which holds the comment data
 */
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

CommentView.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
    createdDateTime: PropTypes.number,
  })
}

export default CommentView