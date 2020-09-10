function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, initialText: 'changed in the browser!' };
      case 'ADD_TYPE':
      console.log('statestate', state)
      console.log('statestateaction', action)
      const newState = {...state, data:[...state.data, {name: action.name, desc: action.description, songs: action.songs}]}
      console.log('newState', newState)
      return  newState;
    default:
      return { ...state };
  }
}

export default reducer;
