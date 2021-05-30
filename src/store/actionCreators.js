import { HANDLE_INPUT_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'


export const getInputChangeAction = (value) => ({
    type: HANDLE_INPUT_CHANGE,
    value
})

export const getAddTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

// without redux-saga
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// with redux-saga
export const getInitList = () => ({
    type: GET_INIT_LIST
})