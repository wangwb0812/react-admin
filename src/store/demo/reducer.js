let defaultState = {
  value: 1
}

 const data = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      const value = ++state.value
      return {...state, ...{value}}
    case 'DECREMENT':
      const value1 = --state.value
      return {...state, ...{value: value1}}
    default: return state;
  }
}

export default data