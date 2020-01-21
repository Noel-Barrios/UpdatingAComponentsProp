import React from "react";
import Child from "./../Child/Child";

export default class Parent extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>

        <Child></Child>
      </div>
    );
  }
}
