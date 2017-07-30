import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Wade"};
  }

  render() {
    const title = "Welcome Wade!";

    return (
      <div>
        <Header title={title}/>
        <Header title={"Other Title"}/>
        <Footer/>
      </div>
    )
  }
}
