import React, { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="from-group">
          <label htmlFor>
            New Comment
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              type="text"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
