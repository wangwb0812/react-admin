import * as todo from './action-type'


export const addTodo = text => {
  return {
    type: todo['ADD_LIST'],
    finish: false,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: todo['TOGGLE_TODO'],
    id
  }
}

export const delTodo = id => {
  return {
    type: todo['DEL_LIST'],
    id
  }
}

export const finishAll = () => {
  return {
    type: todo['FINISH_ALL']
  }
}

export const delAll = () => {
  return {
    type: todo['DEL_ALL']
  }
}

