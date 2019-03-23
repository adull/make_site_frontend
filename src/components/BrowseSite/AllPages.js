import React from 'react';
import Page from './';
// import Wtf from './';

class AllPages extends React.Component {
  render() {
    let pageArr = [];
    for(let i = 0; i < this.props.pages.length; i ++) {
      // console.log("is this the problem?")
      pageArr.push(<Page data={this.props.pages[i]} key={"fuck" + i} />);
    }
    // console.log(pageArr);
    // return (
    //   <div className="all-pages">
    //     <div className="all-pages-title">
    //       All Pages
    //     </div>
    //     <div className="all-pages-links">
    //       {pageArr}
    //     </div>
    //   </div>
    // )
    console.log(pageArr);
    return (
      <div className="all-pages">
        {pageArr}
      </div>
    )
  }
}

export default AllPages;
