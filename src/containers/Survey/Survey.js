import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
          <div className={styles.itemContainer}>
             <h3> Question 1: </h3>
             <h3> It is this? </h3>
             <div className={styles.chooseMeBtn} data-item="1">
                <div className={styles.roundButtonCircle}>
                  <a href="#" className={styles.roundButton}>This!</a>
                </div>
              </div>
          </div>
          <div className={styles.itemContainer}>
            <h3> Question 2: </h3>
            <h3> Or that? </h3>
            <div className={styles.chooseMeBtn} data-item="2">
            <div className={styles.roundButtonCircle}>
              <a href="#" className={styles.roundButton}>That!</a>
            </div>
            </div>
          </div>
        </div>
    );
  }
}
