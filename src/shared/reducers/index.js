function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
        return { ...state, initialText: 'changed in the browser!' };
    case 'ADD_TYPE':
        return {...state, data:[...state.data, {name: action.name, desc: action.description}]}
    case 'FETCH_SONGS':
        const newState1 = {...state, songs: action.songs}
        console.log('FETCH_SONGS', newState1)
        return  newState1
    case 'CHANGE_LIMIT':
        const newState2 = {...state,limit: action.limit}
        console.log('CHANGE_LIMIT', newState2)
        return newState2
    case 'RESET_SKIP':
        const newState3 = {...state, skip: 0}
        console.log('RESET_SKIP', newState3)
        return newState3
    case 'CHANGE_SKIP':
        const newState4 = {...state, skip: action.skip}
        console.log('CHANGE_SKIP', newState4)
        return newState4
    case 'CHANGE_TYPE_ID':
        const newState5 = {...state, typeId: action.typeId}
        console.log('CHANGE_TYPE_ID', newState5)
        return newState5
    default:
      return { ...state };
  }
}

export default reducer;
