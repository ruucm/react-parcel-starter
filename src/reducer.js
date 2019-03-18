const reducer = (
  state = {
    count: 3,
    testArray: [
      {
        text: 'a',
      },
      {
        text: 'b',
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1 })
    case 'DECREMENT':
      return Object.assign({}, state, { count: state.count - 1 })
    case 'UPDATE_ARRAY':
      return Object.assign({}, state, { testArray: action.data })
    default:
      return state
  }
}

export default reducer
