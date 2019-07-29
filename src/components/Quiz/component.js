import React from 'react';
import {withStyles} from '@material-ui/styles';
import {
  TextField,
  Button
} from '@material-ui/core';


const styles = {
  questionTitle: {
    fontSize: 34,
    justifyContent: "center",
    color: 'white',
    width: '80%',
    paddingTop: 80,
  },

  activeAnswer: {
    border: 1,
    borderColor: 'white',
    borderRadius: 15
  },

  passiveAnswer: {},

  questionSection: {
    textAlign: 'center',
    backgroundImage: "url('./images/base.png')",
    backgroundSize: "cover",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    alignItems: "center"
  },

  image: {
    position: "relative",
    maxWidth: "70%",
    minWidth: "50%",
    maxHeight: "70%",
    minHeight: "50%"
  },
  reminder:{
    position: "absolute",
    left: 25,
    bottom: 25,
    color: "white",
    fontWeight: "bold",
  },

  label:{
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },

  label4:{
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
    fontSize: 17,
    color: "white",
    backgroundImage: "url('./images/luuH.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "100%",
    height: '100%'
  },
  intro: {
    width: '100%',
    height: '40%',
    textAlign: 'center',
    marginTop: '40%',
    fontSize:'6vh',
    color:'white'
  },
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "30vh",
  },
  button: {
    position:"fixed",
    bottom:"7vh",
    alignSelf: "center",
    backgroundColor: '#D20C08',
    fontSize: "3vh",
    width: "74vw",
    borderRadius: "50px",
  }
};

const Quiz = ({render, btnState, toogleState}) => (
    <div className="container-fuild" style={styles.container}>
      {render ? <Question {...{btnState, toogleState}}/> : <Intro/>}
    </div>
  )
;

const Intro = () => (
    <div>
      <div style={styles.intro}>NÀO CŨNG BỎ VÀO MÁY ĐỒ DÙNG NHỰA BẠN ĐANG CÓ</div>
      <div style={styles.footer}> <Button style={styles.button}
                                          variant="contained"
                                          color="primary"
                                          size="large">
        Bạn đã sẵn sàng</Button>
      </div>
    </div>

);


const Question = ({btnState, toogleState}) => (
  <div style={styles.questionSection}>
    <div style={styles.questionTitle}><b>Đồ nhựa mà bạn vừa bỏ vào máy là gì trong những vật sau</b></div>
    
    <div className="grid2x2">
      <div className="box" style={btnState[0] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(0)}>
        <img src="./images/chai.svg" alt="chai nhua" style={styles.image}/>
        <div style={styles.label}>Chai nhựa</div>
      </div>
      <div className="box" style={btnState[1] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(1)}>
        <img src="./images/ly.svg" alt="ly nhua" style={styles.image}/>
        <div style={styles.label}>Ly nhựa</div>
      </div>
      <div className="box" style={btnState[2] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(2)}>
        <img src="./images/hop.svg" alt="hop nhua" style={styles.image}/>
        <div style={styles.label}>Hộp nhựa</div>
      </div>
      <div className="box" style={btnState[3] ? styles.activeAnswer : styles.passiveAnswer} onClick={() => toogleState(3)}>
        <img src="./images/muong_nia.svg" alt="muong nia" style={styles.image}/>
        <div style={styles.label4}>Các đồ nhựa khác (Muỗng nĩa, ống hút, túi ni lông,...)</div>
      </div>
    </div>
    <div style={styles.reminder}>*Khuyến khích ít nhất 2 món</div>
  </div>
);

export default withStyles(styles)(Quiz);