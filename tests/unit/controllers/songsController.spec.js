import {fetchSongs} from '../../../src/client/controllers/songsController'
const dispatch = jest.fn()
import songs from '../../data/songs.json'
const nock = require('nock')

describe("Song controller", () => {
    test("fetchSongs", () => {
        const limit = 5
        const skip=3
        const  genreId = '5f5a8b23c67a3f0ee1e6a7ab'
        nock(`/songs?limit=${limit}&skip=${skip}&&genreId=${genreId}`).get('/').reply(200, songs)

        fetchSongs(limit, skip, genreId, dispatch)
        expect(dispatch.calledOnce).toBe.true;   

    })
})