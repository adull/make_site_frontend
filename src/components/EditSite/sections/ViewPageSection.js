import React from 'react';
import TextSubsection from './TextSubsection';
import ImageSubsection from './ImageSubsection';

class ViewPageSection extends React.Component {
  constructor(props) {
    super(props);


  }



  render() {
    let data = this.props.textSubsections[0].props.data;

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

    // console.log(this.props)
    let textSectionsArr = [];
    for(let i = 0; i < this.props.textSubsections.length; i ++) {
      let data = this.props.textSubsections[i].props.data;
      textSectionsArr.push(<TextSubsection key={i} data={data} />)
    }
    return (
      <div style={styles}>
        {textSectionsArr}
      </div>
    )
  }
}

export default ViewPageSection;
