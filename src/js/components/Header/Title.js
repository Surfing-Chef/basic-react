import React from "react";

<<<<<<< HEAD
export default class Title extends React.Component {
  render() {
    const name = "Surfing-Chef";
    return (
      <header>
        <h1>Welcome</h1>
      </header>
    )
=======

export default class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
>>>>>>> parent of ab3b363... Initial Commit - set up work space
  }
}
