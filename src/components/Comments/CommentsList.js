import React from 'react'
import { connect } from 'react-redux';

import { commentActions } from '../../actions';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    let pathName = window.location.pathname;
    let url = pathName.slice(3);
    // console.log("fuck you dad")
    // console.log(this.props)
    props.getComments(url)
  }
  render() {
    // console.log("sheainteeennkowit")
    console.log(this.props)
    let pathName = window.location.pathname;
    let url = pathName.slice(3);

    return (
      <div className="comments-list">
        comment list dude!
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: (url) => { dispatch(commentActions.getComments(url)) },
  }
}

function mapStateToProps(state) {
    const { comment } = state.comment;
    return {
      comment
    }
}

const connectedCommentsList = connect(mapStateToProps, mapDispatchToProps)(CommentsList);

export default connectedCommentsList
