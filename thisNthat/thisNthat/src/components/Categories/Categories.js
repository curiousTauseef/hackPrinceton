import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Categories extends Component {
  static propTypes = {
    info: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
    const {info, load} = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');
    const showSelected = load ? 'fa fa-star-o' : 'fa fa-star'
    return (
      <div className={showSelected}>
        <button className="btn btn-primary">
           <i className={showSelected}></i>
           {info}
        </button>
      </div>
    );
  }
}
