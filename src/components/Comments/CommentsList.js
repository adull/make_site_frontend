import React from 'react'
import { connect } from 'react-redux';

import { commentActions } from '../../actions';

class CommentsList extends React.Component {
  constructor() {
    super();
    let pathName = window.location.pathname;
    let url = pathName.slice(3);
    console.log(this.props)
    // this.props.getComments(url)
  }
  render() {
    console.log(this.props)
    let pathName = window.location.pathname;
    let url = pathName.slice(3);
    // this.props.getComments(url)
    // console.log(this.props)
    return (
      <div className="comments-list">
        comment list
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // console.log("map dispatch")
  return {
    getComments: (url) => { dispatch(commentActions.getComments(url)) },
  }
}

function mapStateToProps(state) {
  // console.log(state)
    const { comment } = state.comment;
    // console.log({registering})
    return {
      comment
    }
}

const connectedCommentsList = connect(mapStateToProps, mapDispatchToProps)(CommentsList);

export default connectedCommentsList
