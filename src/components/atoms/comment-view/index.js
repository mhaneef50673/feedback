import React from 'react';
import moment from 'moment';

import './comment-view.scss';

const BLOCK_NAME = 'comment';

const CommentView = props => {
  const { comment } = props;
  return (
    <li className={`${BLOCK_NAME} user-comment`}>
      <div className="info">
        <a>{comment.name}</a>
        <span>{moment(comment.createdDate).format('MMM DD h:mm A')}</span>
      </div>
      <p>{comment.comment}</p>
    </li>
  );
};

export default CommentView