import reducers from '../../../src/shared/reducers'
import songs from '../../data/songs'
import genres from '../../data/genres'
import songsCountByGenre from '../../data/songsCountByGenre'

import {FETCH_SONGS, RESET_SKIP, CHANGE_GENRE_ID, CHANGE_SKIP, ADD_GENRE} from '../../../src/shared/reducers/actions'

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
        const newState =  reducers({skip:78}, {type: CHANGE_GENRE_ID, genreId:'5f5a8b23c67a3f0ee1e6a7ab'})  
        expect(newState.genreId).toEqual('5f5a8b23c67a3f0ee1e6a7ab')
    })
    test("CHANGE_GENRE_ID change skipped items", () => {
        const newState =  reducers({skip:78}, {type: CHANGE_GENRE_ID, genreId:'5f5a8b23c67a3f0ee1e6a7ab'})  
        expect(newState.genreId).toEqual('5f5a8b23c67a3f0ee1e6a7ab')
    })
    test("ADD_GENRE test songCountByGenre and genres are populated properly", () => {
        const state = {genres, songsCountByGenre, limit:5, skip:0}
        const action = {type: ADD_GENRE, genreId: '5f5a8b23c67a3f0ee1e6a7ag', name:'POP POP', description: 'description'}
        const newState =  reducers(state, action) 

        const songCountByGenre = newState.songsCountByGenre.find( it => it._id === '5f5a8b23c67a3f0ee1e6a7ag') 
        expect(songCountByGenre.count).toEqual(0)

        const newGenre = newState.genres.find(it =>  it._id === '5f5a8b23c67a3f0ee1e6a7ag')
        expect(newGenre.name).toEqual('POP POP')
        expect(newGenre.desc).toEqual('description')
    })

  })