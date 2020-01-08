import React from 'react';
import CommentsList from './CommentsList'
import WriteComment from './WriteComment'

class Comments extends React.Component {
  render() {
    console.log("comments")
    return (
      <div className="comments">
        <CommentsList />
        <WriteComment />
      </div>
    )
  }
}

export default Comments
