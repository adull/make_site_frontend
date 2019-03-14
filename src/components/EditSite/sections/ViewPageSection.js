import React from 'react';
import TextSubsection from './TextSubsection';
import ImageSubsection from './ImageSubsection';

class ViewPageSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    let textSectionsArr = [];
    for(let i = 0; i < this.props.textSubsections.length; i ++) {
      let data = this.props.textSubsections[i].props.data;
      textSectionsArr.push(<TextSubsection key={i} data={data} />)
    }
    return (
      <div>
        {textSectionsArr}
      </div>
    )
  }
}

export default ViewPageSection;
