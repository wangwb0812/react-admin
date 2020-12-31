import * as common from './action-type'

export const collapsChange = () => {
  return {
    type: common['TOGGLE_COLLAPSED']
  }
}

export const setUserInfo = (value) => {
  return {
    type: common['SET_USER_INFO'],
    value
  }
}