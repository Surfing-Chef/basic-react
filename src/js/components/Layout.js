import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
=======
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
>>>>>>> parent of ab3b363... Initial Commit - set up work space
  }
}
