import {fetchSongs} from '../../../src/client/controllers/songsController'
const dispatch = jest.fn()
const sendError = jest.fn()
import songs from '../../data/songs.json'
const nock = require('nock')

describe.skip("Song controller", () => {
    test("fetchSongs positive scenario", async(done) => {
        const limit = 5
        const skip=3
        const  genreId = '5f5a8b23c67a3f0ee1e6a7ab'
        nock(`/songs?limit=${limit}&skip=${skip}&&genreId=${genreId}`).get('/').reply(200, songs)

        await fetchSongs(limit, skip, genreId, dispatch)
        done()
        expect(dispatch.calledOnce).toBe.true;   
    })

    test("fetchSongs when error", async(done) => {
        const limit = 5
        const skip=3
        const  genreId = '5f5a8b23c67a3f0ee1e6a7ab'
        nock(`/songs?limit=${limit}&skip=${skip}&&genreId=${genreId}`).get('/').reply(500)

        await fetchSongs(limit, skip, genreId, dispatch, sendError)
        done()
        expect(sendError.calledOnce).toBe.true;   
        expect(dispatch.calledOnce).toBe.false;   
    })
})