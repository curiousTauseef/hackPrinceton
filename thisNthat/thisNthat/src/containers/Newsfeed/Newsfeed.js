import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initializeWithKey} from 'redux-form';

export default class Newsfeed extends Component {
<Helmet title="Newsfeed"/>
  render() {
    return (
      <div>
        <h1>
          Widgets
        </h1>
        Newsfeed here!
      </div>
    );
  }
}
