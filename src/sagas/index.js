import axios from 'axios';
import Cookies from 'cookies-js';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';

const URL = 'https://jogtracker.herokuapp.com/api/v1';

function* logIn() {
  try {
    const formData = new FormData();
    formData.append('uuid', 'hello');

    const params = {
      method: 'POST',
      url: `${URL}/auth/uuidLogin`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const response = yield call(axios, params);
    if (response.error) {
      throw response.error;
    }
    Cookies.set('token', response.data.response.access_token);
    yield put(actions.successLogIn());
  } catch (error) {
    yield put(actions.failedLogIn(error));
    
  }
}

function* getUser() {
  try {
    const params = {
      method: 'GET',
      url: `${URL}/auth/user`,
      headers: { 'Authorization': `Bearer ${Cookies.get('token')}` },
    };

    const response = yield call(axios, params);
    console.log('response', response);  
    if (response.error) {
      throw response.error;
    }
    yield put(actions.successGetUser(response.data));
  } catch (error) {
    yield put(actions.failedGetUser(error));
    
  }
}

export default function*() {
  yield takeLatest('LOG_IN', logIn);
  yield takeLatest('GET_USER', getUser);
}
