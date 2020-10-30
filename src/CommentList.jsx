import React from 'react';

// eslint-disable-next-line react/prop-types
export default ({ comments }) => {
  // eslint-disable-next-line react/prop-types
  const renderedComments = comments.map((comment) => <li key={comment.id}>{comment.content}</li>);

  return (
    <ul>
      {renderedComments}
    </ul>
  );
};
