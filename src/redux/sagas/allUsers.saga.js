import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getAllUsers() {
    try {
        const response = yield axios.get(`/all-users`);
        yield put({
            type: 'SET_ALL_USERS',
            payload: response.data
        });
    }   catch (err) {
        console.log('error HELP:', err);
    }
}

function* getAllUsersSaga() {
    yield takeLatest('GET_ALL_USERS', getAllUsers);
  }  

export default getAllUsersSaga;