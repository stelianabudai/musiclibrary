import reducers from '../../../src/shared/reducers'
import songs from '../../data/songs'
import {FETCH_SONGS, RESET_SKIP, CHANGE_TYPE_ID, CHANGE_SKIP, ADD_TYPE} from '../../../src/shared/reducers/actions'

describe("Reducers ", () => {
    test("FETCH_SONGS concatenates songs to the state", () => {
      const newState =  reducers({}, {type: FETCH_SONGS, songs})  
      expect(newState.songs).toEqual(songs)
    })
    test("RESET_SKIP resets skipped items to 0", () => {
        const newState =  reducers({skip:78}, {type: RESET_SKIP})  
        expect(newState.skip).toEqual(0)
    })

    test("CHANGE_SKIP change skipped items", () => {
        const newState =  reducers({skip:78}, {type: CHANGE_SKIP, skip:78})  
        expect(newState.skip).toEqual(78)
    })

    test("CHANGE_TYPE_ID change skipped items", () => {
        const newState =  reducers({skip:78}, {type: CHANGE_TYPE_ID, genreId:'5f5a8b23c67a3f0ee1e6a7ab'})  
        expect(newState.genreId).toEqual('5f5a8b23c67a3f0ee1e6a7ab')
    })
    test("CHANGE_TYPE_ID change skipped items", () => {
        const newState =  reducers({skip:78}, {type: CHANGE_TYPE_ID, genreId:'5f5a8b23c67a3f0ee1e6a7ab'})  
        expect(newState.genreId).toEqual('5f5a8b23c67a3f0ee1e6a7ab')
    })
    test("ADD_GENRE", () => {
        const newState =  reducers({skip:78}, {type: ADD_GENRE, genreId:'5f5a8b23c67a3f0ee1e6a7ab'})  
        expect(newState.genreId).toEqual('5f5a8b23c67a3f0ee1e6a7ab')
    })

  })