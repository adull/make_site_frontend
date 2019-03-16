import React from 'react';

class ImageSubsection extends React.Component {
  render() {
    console.log("does this even render")
    let data = this.props.data;
    let styles = {
      marginTop: data.margin[0],
      marginRight: data.margin[1],
      marginBottom: data.margin[2],
      marginLeft: data.margin[3],
      paddingTop: data.padding[0],
      paddingRight: data.padding[1],
      paddingBottom: data.padding[2],
      paddingLeft: data.padding[3],
    }

    let imageHtml = data.html;
    console.log(imageHtml)
    let imageSrc = imageHtml.split("'").pop().split("'")[0];
    console.log(imageSrc)
    return (<div>haha</div>);

  }
}

export default ImageSubsection;
