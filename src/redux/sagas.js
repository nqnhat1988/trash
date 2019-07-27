import { call, put, takeEvery } from "redux-saga/effects";

import { actions, Types } from "./actions";
import firebaseService from "../components/Firebase";
import * as ROUTES from "../constants/routes";

function* loadData() {
  console.log("loadData");
  yield put(actions.updateData(3));
}

function* doLogin({navigation, email, password}) {
  try {
    const data = yield call(firebaseService.auth.signInWithEmailAndPassword, email, password);
    // //yield put(loginWithEmailSuccess(data));
    // console.log(data);
    navigation.push(ROUTES.HOME);
  } catch (error) {
    window.alert(error.message)

    //yield put(loginWithEmailFailure(error));
  }
}

function* updateGift({navigation, data}) {
  console.log(data)
  try {
    const booth =
      {
        onghutinox: data.onghutinox > 0 ? data.onghutinox : 0,
        tuivai: data.tuivai > 0 ? data.tuivai : 0,
        daonia: data.daonia > 0 ? data.daonia : 0,
        onghutgao: data.onghutgao > 0 ? data.onghutgao : 0,
        binhthuytinh: data.binhthuytinh > 0 ? data.binhthuytinh : 0,
      };
    const result = yield call(firebaseService.database.create, "booths/" + data.city + '/' + data.date, booth);
    console.log("Successful update Gift: ", result);
  } catch (error) {
    window.alert(error.message)
  }
}

function* getGifts({city}) {
  try {
    const result = yield call(firebaseService.database.read, "booths/" + city);

    console.log("Get Gifts", result);
    let dateGifts = [];
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        console.log(key + " -> " + result[key]);
        let dateGift = '';
        let gifts = result[key];
        for(let keySnap in gifts){
          if (gifts.hasOwnProperty(keySnap)) {
            console.log(keySnap + " -> " + gifts[keySnap]);
            dateGift = gifts[keySnap];
          }
        }
        dateGift["date"] = key;
        dateGifts.push(dateGift)
      }
    }
    console.log("date gifts: ", dateGifts);
    yield put(actions.updateBoothsData(dateGifts));
  } catch (error) {
    window.alert(error.message)
  }
}

function* rootSaga() {
  yield takeEvery(Types.DO_LOGIN, doLogin);
  yield takeEvery(Types.LOAD_DATA, loadData);
  yield takeEvery(Types.UPDATE_GIFT, updateGift);
  yield takeEvery(Types.GET_GIFTS, getGifts);
}

export { rootSaga };
