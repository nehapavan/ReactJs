import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* UsersFetch() {
    return fetch('https://72d724f9-52d4-476d-9c75-fb05f926c93e.mock.pstmn.io/listOfBanks')
    .then(response=>response.json)
}
function *GetUsersFetch(){  
   try {
      const users = yield call(UsersFetch);
      yield put({type: "USER_FETCH_SUCCEEDED", users});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
    yield takeEvery("GET_USER_FETCH", GetUsersFetch);
  }
  
export default mySaga;