import * as types from './action-type'

export const add = () => {
  return {
    type: types.INCREMENT
  }
}
export const reduce = () => {
  return {
    type: types.DECREMENT
  }
}