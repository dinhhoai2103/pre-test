import {
  GET_USER,
  GET_USER_DATA,
  GET_PHOTO,
  GET_TODO,
  CHANGE_STATUS,
  GET_COMMENT,
} from "../constants";

export function getUserList(params) {
  return {
    type: GET_USER,
    payload: params,
  };
}
export function getUserData(params) {
  return {
    type: GET_USER_DATA,
    payload: params,
  };
}
export function getPhoto(params) {
  return {
    type: GET_PHOTO,
    payload: params,
  };
}
export function getTodo(params) {
  return {
    type: GET_TODO,
    payload: params,
  };
}
export function changeStatus(params) {
  return {
    type: CHANGE_STATUS,
    payload: params,
  };
}
export function getComment(params) {
  return {
    type: GET_COMMENT,
    payload: params,
  };
}
