import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as widgetActions from 'redux/modules/widgets';
import {isLoaded, load as loadWidgets} from 'redux/modules/widgets';
import {initializeWithKey} from 'redux-form';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadWidgets());
    }
  }
}])
@connect(
  state => ({
    widgets: state.widgets.data
  }),
  {...widgetActions, initializeWithKey })
export default class Widgets extends Component {
  static propTypes = {
    widgets: PropTypes.array
  };

  render() {
    const handleEdit = (widget) => {
      const {editStart} = this.props; // eslint-disable-line no-shadow
      return () => editStart(String(widget.id));
    };
    const {widgets, error, editing, loading, load} = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }
    const styles = require('./Widgets.scss');
    return (
      <div className={styles.widgets + ' container'}>
        <h1>
          Widgets
        </h1>

      </div>
    );
  }
}
