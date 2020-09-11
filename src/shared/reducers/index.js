function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, initialText: 'changed in the browser!' };
      case 'ADD_TYPE':
      const newState = {...state, data:[...state.data, {name: action.name, desc: action.description, songs: action.songs}]}
      return  newState;
    default:
      return { ...state };
  }
}

export default reducer;
