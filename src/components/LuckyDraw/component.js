import React from 'react';
import * as Const from "../../constants/Const"
import * as Routes from "../../constants/routes"
import commonStyles from "../common"
import {Button} from '@material-ui/core';

const styles = {
  image: {
    width: '70%',
    marginTop: 50
  },
  backGroundLucky: {
    backgroundImage: "url('./images/player_info_background.png')",
  },
  backGroundResult: {
    backgroundImage: "url('./images/result_background.png')",
  },
  imageResult:{
    width: '40%',
    paddingTop: '10%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight:'100%'
  },
};


const LoadingSpinner = ({isLoading, onClickSpinner}) => (
  <div className="container" style={{...commonStyles.container, ...styles.backGroundLucky}}>
    <div style={commonStyles.topText}>CẢM ƠN BẠN ĐÃ GIẢM DÙNG ĐỒ NHỰA VÌ SỨC KHỎE NGƯỜI THÂN YÊU</div>
    <img className={isLoading ? "loading" : ""} style={styles.image}
         src="./images/loading.png"
         onClick={onClickSpinner}
    />
  </div>
);

const LuckyDraw = ({isLoading, onClickSpinner}) => (
  <div className="container" style={commonStyles.container}>
    <LoadingSpinner {...{isLoading, onClickSpinner}}/>
  </div>
);


export default LuckyDraw;