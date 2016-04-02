import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import config from '../../config';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import {addQuestions} from 'redux/modules/questions';

@connect(
    state => ({questions: state}),
    dispatch => bindActionCreators({addQuestions}, dispatch))

export default class Home extends Component {
  static propTypes = {
    questions: PropTypes.object,
    addQuestions: PropTypes.func.isRequired
  }
  _compareNow = (event) => {
    const {addQuestions} = this.props;
    event.preventDefault();
    console.log(this.refs.item1.value);
    console.log(this.refs.item2.value);
  };
  render() {
    const {questions, addQuestions} = this.props;
    const styles = require('./Home.scss');
    
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>
            <div className={styles.inputContainer}>
               <input ref="item1" name="item1" id="item1" type="text"></input>
               <input ref="item2" name="item2" id="item2" type="text"></input>
            </div>
            <div className={styles.inputUploadContainer}>
               <input ref="item1Upload" name="item1upload" id="item1Upload" type="file"></input>
               <input ref="item2Upload" name="item2Upload" id="item2Upload" type="file"></input>
            </div>
            <LinkContainer to="/survey">
            <a href="#" className="btn btn-primary" onClick={this._compareNow}>Let me help someone to decide This or That</a>
            </LinkContainer>
          </div>
        </div>

        <div className="container">
        </div>
      </div>
    );
  }
}
