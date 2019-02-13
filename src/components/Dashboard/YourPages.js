import React from 'react';

import Page from './Page'

class YourPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    if(!this.props.data.items) {
      return (
        <div className="loading">loading</div>
      )
    }
    else if(this.props.data.items) {
      if(this.props.data.items.getPages) {
        // console.log(this.props.data.items.getPages)
        let pages = this.props.data.items.getPages;
        let pageArr = [];
        for(let i = 0; i < pages.length; i ++ ) {
          let page = pages[i];
          pageArr.push(<Page key={i} id={page.id} author={page.author} url={page.url} title={page.title} style={page.style}/>)
        }
        return(
          <div>
            {pageArr}
          </div>
        )
      }
    }
  }
}

export default YourPages;
