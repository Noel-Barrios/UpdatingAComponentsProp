import React from "react";
import Child from "./../Child/Child";
import "./Parent.css";

export default class Parent extends React.Component {
  state = {
    parentName: "Parent"
  };
  onChange = newName => {
    this.setState({ parentName: newName });
  };

  render() {
    return (
      <div className="ParentContainer">
        <h1>{this.state.parentName}</h1>

        <Child
          childName={this.state.parentName}
          onNameChange={this.onChange}
        ></Child>
      </div>
    );
  }
}
