import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Categories } from 'components';

export default class About extends Component {

  state = {
    load: false
  }

  handleToggleBtn = () => this.setState({load: !this.state.load});

  render() {
    const {load} = this.state;
    return (
      <div className="container">
        <h3>Your opinion matters</h3>
        <Helmet title="Newsfeed"/>
      </div>
    );
  }
}
