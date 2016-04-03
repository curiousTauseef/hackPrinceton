import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';

export default class LandingPage extends Component {
  _compareNow = (event) => {
    event.preventDefault();
    console.log(this.refs.item1.value);
    console.log(this.refs.item2.value);
  };
  render() {
    const styles = require('./LandingPage.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div>

      <h1>{config.app.title}</h1>
      <p>
          <img src={logoImage}/>
      </p>
      <h2>{config.app.description}</h2>
      <div>
         <input ref="item1" name="item1" id="item1" type="text"></input>
         <input ref="item2" name="item2" id="item2" type="text"></input>
      </div>
      <div>
         <input ref="item1Upload" name="item1upload" id="item1Upload" type="file"></input>
         <input ref="item2Upload" name="item2Upload" id="item2Upload" type="file"></input>
      </div>
      <button className="btn btn-primary" onClick={this._compareNow}>Let me help someone to decide This or That</button>
      </div>
    );
  }
}
