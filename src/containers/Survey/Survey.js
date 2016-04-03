import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Questions} from 'components'
import {responses} from 'redux/modules/response';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({responses}, dispatch))
export default class Survey extends Component {
  static propTypes = {

  }

  render() {
    const styles = require('./Ask.scss');
    return (
        <div className="container">
           <Questions/>
        </div>
    );
  }
}
