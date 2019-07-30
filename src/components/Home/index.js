import React, {Component} from 'react';
import * as ROUTES from "../../constants/routes";

import {Button} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import commonStyles from "../common"


const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    justifyContent: "center",
    width: "100%",
    minHeight:'30%',
    maxHeight:'40%',
    textAlign:"center"
  },
  text: {
    position:"relative",
    color: "#BA0000",
    fontSize: 35,
    textAlign:"center",
    width: "74%",
    margin: "2%",
    marginBottom:"4%",
    marginLeft:"13%"
  },
  button: {
    position:"relative",
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: 22,
    width: "74%",
    borderRadius: 50,
    margin:'1%'
  },
  logo: {
    position:"fixed",
    zIndex: 100,
    top: 30,
    left: 30
  },
  label: {
    position: "fixed",
    zIndex: 100,
    left: 0,
    height: "22%",
    width: "68%"
  }
};

export default class Home extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.track.clickNext(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  routeChange() {
    this.props.history.push(ROUTES.QUIZ);
  }

  render() {
    return (
      <div className="container">
        <img src="./images/logo.svg" alt="prudential logo" style={styles.logo}/>
        <AwesomeSlider style={{width: '100%', height:'100%', position:'absolute'}}
                       bullets={false}
                       infinite={true}
                       organicArrows={false}
                       ref={t => this.track = t}>
          <div data-src='./images/home1.png'>
            <img style={Object.assign({top: "25%"}, styles.label)} src="./images/cai_gia.png" alt="label"/>
          </div>
          <div data-src='./images/home2.png'>
            <img style={Object.assign({top: "50%"}, styles.label)} src="./images/cai_gia.png" alt="label"/>
          </div>
          <div data-src='./images/home3.png'>
            <img style={Object.assign({top: "25%"}, styles.label)} src="./images/cai_gia.png" alt="label"/>
          </div>
          <div data-src='./images/home4.png'>
            <img style={Object.assign({top: "56%"}, styles.label)} src="./images/cai_gia.png" alt="label"/>
          </div>
        </AwesomeSlider>
        <div style={commonStyles.footer}>
          <Button style={commonStyles.bottomButton}
                  onClick={() => this.routeChange()}>
            Tìm hiểu thêm</Button>
        </div>
      </div>
    );
  }
}