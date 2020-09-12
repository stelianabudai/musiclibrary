import {ADD_TYPE, FETCH_SONGS, RESET_SKIP, CHANGE_SKIP, CHANGE_TYPE_ID, ADD_SONG} from './actions'
const calculateSkip= (count, limit) => (count - count%limit)

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TYPE:
        return {...state, data:[...state.data, {name: action.name, desc: action.description}]}
    case FETCH_SONGS:
        return {...state, songs: action.songs, limit:action.limit}
    case RESET_SKIP:
        return {...state, skip: 0}
    case CHANGE_SKIP:
        return {...state, skip: action.skip}
    case CHANGE_TYPE_ID:
        return  {...state, typeId: action.typeId}
    case ADD_SONG:
       const group = state.songsCountByGenre.find(sg => sg._id === action.typeId)
       const newSongsCountByGenre = state.songsCountByGenre.filter(sg => sg._id !== action.typeId)
       return {...state,
                songs: [...state.songs, action],
                songsCountByGenre: [...newSongsCountByGenre,
                {_id:group._id, count: group.count+1}],
                skip: calculateSkip(group.count+1, state.limit)
              }
    default:
      return { ...state }
  }
}

export default reducer
