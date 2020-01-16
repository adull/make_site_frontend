import React from 'react';
import CommentsList from './CommentsList'
import WriteComment from './WriteComment'

class Comments extends React.Component {
  render() {
    console.log("comments")
    return (
      <div className="comments">
        <div className="comments-title">
          COMMENTS
        </div>
        <CommentsList />
        <WriteComment />
      </div>
    )
  }
}

export default Comments
