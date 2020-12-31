const defaultState = {
  collapsed: false
}

const common = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_COLLAPSED':
      const collapsed = !state.collapsed
      return { ...state, ...{ collapsed } }
    default: return state;
  }
}

export default common