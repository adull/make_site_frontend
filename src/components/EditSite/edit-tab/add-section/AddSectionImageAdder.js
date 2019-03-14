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
    let image = this.refs.imageRef.files[0];
    let reader = new FileReader();
    let url = reader.readAsDataURL(image);
    reader.onloadend = function(e) {
      // console.log(e);
      this.setState({
        imgSrc: [reader.result]
      })
      this.props.updateImage(image)
    }.bind(this);

  }
  render() {
    return (
      <div className="add-section-image-adder">
        <input className="cms-btn"
               name="image"
               type="file"
               accept="image/png, image/jpg, image/jpeg image/gif"
               onChange={this.imageSelected}
               ref="imageRef"
               required
        />
        <div className="image-preview">
          <img src={this.state.imgSrc} />
        </div>
      </div>
    );
  }
}

export default AddSectionImageAdder;
