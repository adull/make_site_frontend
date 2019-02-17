import React from 'react';
import TextSubsection from './TextSubsection';

class ViewPageSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    let textSectionsArr = [];
    for(let i = 0; i < this.props.textSubsections.length; i ++) {
      textSectionsArr.push(<TextSubsection key={i} data={this.props.textSubsections[i].props.data} />)
    }
    return (
      <div>
        {textSectionsArr}
      </div>
    )
  }
}

export default ViewPageSection;
