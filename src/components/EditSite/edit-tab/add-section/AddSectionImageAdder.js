import React from 'react';

class AddSectionImageAdder extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSelected: false,
      image: []
    }
    this.imageSelected = this.imageSelected.bind(this);
  }

  imageSelected(event) {
    event.preventDefault();
    console.log(this.refs)
    let image = this.refs.imageRef.files[0];
    let reader = new FileReader();
    console.log(image)
    console.log(reader)
    let url = reader.readAsDataURL(image);
    reader.onloadend = function(e) {
      console.log(e);
      console.log(reader);
      this.setState({
        imgSrc: [reader.result]
      })
    }.bind(this);

  }
  render() {
    return (
      <div className="add-section-image-adder">
        <input className="cms-btn" name="image" type="file" accept="image/png, image/jpg, image/jpeg image/gif" onChange={this.imageSelected} ref="imageRef" required />
        <div className="image-preview">
          <img src={this.state.imgSrc} />
        </div>
      </div>
    );
  }
}

export default AddSectionImageAdder;
