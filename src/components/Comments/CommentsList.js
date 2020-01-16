import React from 'react'
import { connect } from 'react-redux';

import { commentActions } from '../../actions';

function mapDispatchToProps(dispatch) {
  return {
    getComments: (url) => { dispatch(commentActions.getComments(url)) },
  }
}

function mapStateToProps(state) {
    const { comment } = state.comment;
    console.log(state.comment)
    // if(state.comment.comments) {
    //   return state.comment.comments;
    // }
    return state.comment
    // return { comment }
}

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    let pathName = window.location.pathname;
    let url
    if(process.env.NODE_ENV === "development") {
      url = pathName.slice(3);
    }
    // else if(pathName.startsWith('/sites/p/')) {
    if(process.env.NODE_ENV === "production") {
      url = pathName.slice(9);
    }
    let bruh = props.getComments(url)
  }

  // {this.props.comments.map((fuck) => {
  //   return <div>fuck</div>
  // })}
  render() {
    // :)
    // let thisObj = this
    // console.log(this.props)
    console.log(this.props)
    if(this.props.loading) {
      return (
        <div className="loading"></div>
      )
    }
    else if(this.props.comments.length > 0){
      console.log("this one")
      console.log(this.props.comments.length)
      return (

          <div className="comments-list">
            {this.props.comments.map((comment, index) => {
              // console.log(comment)
              return(
                <div className="comment" key={index}>
                  <div className="commenter">
                    {comment.commenter_name}:
                  </div>
                  <div className="comment-body">
                    {comment.comment_text}
                  </div>
                </div>)
            })}
          </div>
      )
    }
    else {
      return (<><div style={{fontSize: 100}}>no comments yet</div><div className="loading">bruh</div></>)
    }

  }
}



const connectedCommentsList = connect(mapStateToProps, mapDispatchToProps)(CommentsList);

export default connectedCommentsList
