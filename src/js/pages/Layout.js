import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test">archives</Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button class="btn btn-danger" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
