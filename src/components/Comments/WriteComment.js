import React from 'react'
import { connect } from 'react-redux';
import { commentActions } from '../../actions';
import Alert from '../Alert';

class WriteComment extends React.Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      commentText: '',
      commenterName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const commentData = this.state;
    const { dispatch } = this.props;
    if(commentData.commentText && commentData.commenterName) {
      let commentDataToServer = {
        commentText: commentData.commentText,
        commenterName: commentData.commenterName
      }
      dispatch(commentActions.newComment(commentDataToServer))
    }
  }

  render() {
    return (
      <form name="comment-form" className="write-comment" onSubmit={this.handleSubmit}>
        <label htmlFor="commentText">
           Comment:
           <input name="commentText" type="text" value={this.state.value} onChange={this.handleChange} required/>
         </label>
         <label htmlFor="commenterName">
            What is your fucking Name:
            <input name="commenterName" type="text" value={this.state.value} onChange={this.handleChange} required/>
          </label>
          <div className="form-group">
            <button className="submit">Post comment</button>
          </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    // console.log({registering})
    return {
      registering
    }
}

const connectedWriteComment = connect(mapStateToProps)(WriteComment);

export default connectedWriteComment
