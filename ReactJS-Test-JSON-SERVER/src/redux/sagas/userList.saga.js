import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
  GET_PHOTO,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  CHANGE_STATUS,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_FAIL,
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
} from "../constants";

function* getUserListSaga(action) {
  try {
    const { page } = action.payload;
    const response = yield axios.get(
      `http://localhost:3001/userlist?_page=${page}&_limit=20`
    );
    const data = response.data;
    yield put({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_FAIL,
      payload: error,
    });
  }
}
function* getUserDataSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield axios.get(`http://localhost:3001/userlist/${id}`);
    const data = response.data;
    yield put({
      type: GET_USER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_DATA_FAIL,
      payload: error,
    });
  }
}
function* getPhotoSaga() {
  try {
    const response = yield axios.get(`http://localhost:3001/userlist`);
    const data = response.data;
    yield put({
      type: GET_PHOTO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_PHOTO_FAIL,
      payload: error,
    });
  }
}
function* getTodoSaga(action) {
  try {
    const { page } = action.payload;
    const response = yield axios.get(
      `http://localhost:3001/todolist?_page=${page}&_limit=10`
    );
    const data = response.data;
    yield put({
      type: GET_TODO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_TODO_FAIL,
      payload: error,
    });
  }
}
function* changeStatusSaga(action) {
  try {
    const { id, isDone } = action.payload;
    const response = yield axios.patch(`http://localhost:3001/todolist/${id}`, {
      isDone,
    });
    const data = response.data;
    yield put({
      type: CHANGE_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CHANGE_STATUS_FAIL,
      payload: error,
    });
  }
}
function* getComment(action) {
  try {
    const { page } = action.payload;
    const response = yield axios.get(
      `http://localhost:3001/userlist?_page=${page}&_limit=10`
    );
    const data = response.data;
    yield put({
      type: GET_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_COMMENT_FAIL,
      payload: error,
    });
  }
}
export default function* userListSaga() {
  yield takeEvery(GET_USER, getUserListSaga);
  yield takeEvery(GET_USER_DATA, getUserDataSaga);
  yield takeEvery(GET_PHOTO, getPhotoSaga);
  yield takeEvery(GET_TODO, getTodoSaga);
  yield takeEvery(CHANGE_STATUS, changeStatusSaga);
  yield takeEvery(GET_COMMENT, getComment);
}
