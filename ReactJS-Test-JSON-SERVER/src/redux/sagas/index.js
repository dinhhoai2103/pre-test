import { fork } from "redux-saga/effects";

import userListSaga from "./userList.saga";

export default function* mySaga() {
  yield fork(userListSaga);
}
