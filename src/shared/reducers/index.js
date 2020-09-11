function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TYPE':
        return {...state, data:[...state.data, {name: action.name, desc: action.description}]}
    case 'FETCH_SONGS':
        return {...state, songs: action.songs}
    case 'CHANGE_LIMIT':
        return {...state,limit: action.limit}
    case 'RESET_SKIP':
        return {...state, skip: 0}
    case 'CHANGE_SKIP':
        return {...state, skip: action.skip}
    case 'CHANGE_TYPE_ID':
        return  {...state, typeId: action.typeId}
    case 'ADD_SONG':
         return {...state, songs: [...state.songs, action]}
    default:
      return { ...state };
  }
}

export default reducer;
