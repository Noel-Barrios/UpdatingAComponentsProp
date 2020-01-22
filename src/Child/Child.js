import React from "react";
import "./Child.css";

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonClicked = () => {
    let randomNumber = Math.random() * 1;
    if (randomNumber > 0.5) {
      this.props.onNameChange("Mother");
    } else {
      this.props.onNameChange("Father");
    }
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
