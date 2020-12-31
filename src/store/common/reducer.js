const defaultState = {
  collapsed: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) 
}

const common = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_COLLAPSED':
      const collapsed = !state.collapsed
      return { ...state, ...{ collapsed } }
    case 'SET_USER_INFO':
      const userInfo = action.value
      return { ...state, ...{ userInfo } }
    default: return state;
  }
}

export default common