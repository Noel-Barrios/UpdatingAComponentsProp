import React from "react";
import "./Child.css";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  buttonClicked = event => {
    // let randomNumber = Math.random() * 1;
    // if (randomNumber > 0.5) {
    //   this.props.onNameChange("Mother");
    // } else {
    //   this.props.onNameChange("Father");
    // }

    if (this.state.clickCount % 2 === 0) {
      this.props.onNameChange("Mother");
    } else {
      this.props.onNameChange("Father");
    }
    this.setState({ clickCount: this.state.clickCount + 1 });
  };

  render() {
    return (
      <div className="ButtonContainer">
        <button className="myButton" onClick={this.buttonClicked}>
          child
        </button>
      </div>
    );
  }
}

export default Child;
