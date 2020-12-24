const defaultState = [
  {
    id: 1,
    text: '默认事件',
    finish: true
  }
]

const todes = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          finish: action.finish
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(item => (item.id === action.id) ? { ...item, finish: !item.finish } : item)
    case 'DEL_LIST':
      const newState = state.filter(item => item.id !== action.id)
      newState.forEach((item, index) => {
        item.id = index
      })
      return newState
    case 'FINISH_ALL':
      return state.map(item => ({ ...item, finish: true }))
    case 'DEL_ALL':
      return []
    default:
      return state
  }
}


export default todes