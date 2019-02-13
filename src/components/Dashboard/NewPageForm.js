import React from 'react';
import Alert from '../Alert';

class NewPageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTitle: '',
      pageURL: '',
      invalidURL: false,
      isPrivate: false,
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // const {name, value} = e.target;
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    var acceptableCharacters = RegExp(/^([\w-]*)$/);
    if(name === 'pageURL') {
      if(!acceptableCharacters.test(value)) {
        console.log("unacceptable")
        this.setState({
          invalidURL: true
        })
        return;
      }
    }

    this.setState({
      invalidURL: false,
      [name]: value
    })
  }


  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const newPageData = this.state;
    // const { dispatch } = this.props;
    // props.
    // console.log(this.props);
    this.props.onSubmit(newPageData);
  }

  render() {
    return (
      <form name="form" className="new-page-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="pageTitle">Page Title</label>
          <input type="text" name="pageTitle" value={this.state.pageTitle} onChange={this.handleChange} />
          {this.state.submitted && !this.state.pageTitle &&
            <div className="help-block">Page title is required</div>
          }
        </div>
        <div className="form-group">
          <label htmlFor="pageName">Page URL</label>
          <input type="text" name="pageURL" value={this.state.pageURL} onChange={this.handleChange} />
          {this.state.submitted && !this.state.pageURL &&
            <div className="help-block">Page URL is required</div>
          }
          {this.state.invalidURL &&
            <div className="help-block">Only letters, numbers, dashes and underscores allowed.</div>}
        </div>
        <div className="form-group">
          <label htmlFor="page-name">Make private?</label>
          <input type="checkbox" name="isPrivate" checked={this.state.isPrivate} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Create Page</button>
          {this.props &&
              <div className="loading"></div>
          }
        </div>
        <Alert />
      </form>
    )
  }
}

export default NewPageForm;
