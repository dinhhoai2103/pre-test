import {
  GET_USER_SUCCESS,
  GET_USER_DATA_SUCCESS,
  GET_PHOTO_SUCCESS,
  GET_TODO_SUCCESS,
  CHANGE_STATUS_SUCCESS,
  GET_COMMENT_SUCCESS,
} from "../constants";
const initialState = {
  userList: [],
  userData: [],
  listPhoto: [],
  todoList: [],
  comment: [],
};
function userListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userList: [...action.payload],
      };
    }
    case GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        userData: [action.payload],
      };
    }
    case GET_PHOTO_SUCCESS: {
      return {
        ...state,
        listPhoto: [...action.payload],
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todoList: [...action.payload],
      };
    }
    case CHANGE_STATUS_SUCCESS: {
      const { id, isDone } = action.payload;
      const newTodoListData = state.todoList;
      const taskIndex = state.todoList.findIndex((item) => item.id === id);
      const editedTask = {
        ...state.todoList[taskIndex],
        isDone,
      };
      newTodoListData.splice(taskIndex, 1, editedTask);
      return {
        ...state,
        todoList: [...newTodoListData],
      };
    }
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        comment: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

export default userListReducer;
