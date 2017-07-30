import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
<<<<<<< HEAD
  render() {
    const name = "Surfing-Chef";
    return (
      <Title />
    )
=======
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
>>>>>>> parent of ab3b363... Initial Commit - set up work space
  }
}
