import React from 'react';

import Page from './Page'

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    if(!this.props.data.items) {
      return (
        <div className="loading">Loading...</div>
      )
    }
    else if(this.props.data.items) {
      if(this.props.data.items.getPages) {
        // console.log(this.props.data.items.getPages)
        let pages = this.props.data.items.getPages;
        let pageArr = [];
        for(let i = 0; i < pages.length; i ++ ) {
          let page = pages[i];
          pageArr.push(<Page key={i} id={page.id} author={page.author} url={page.url} title={page.title} style={page.style} deleteClicked={this.props.onDelete}/>)
        }
        if(pageArr.length > 0) {
          return(
            <div className="pages">
              {pageArr}
            </div>
          )
        }
        else {
          return (
            <div className="pages">
              You haven't created any pages yet. Click "new page" below to create your first page!
            </div>
          )
        }
      }
    }
  }
}

export default Pages;
