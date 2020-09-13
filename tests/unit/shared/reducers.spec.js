import reducers from '../../../src/shared/reducers'
import songs from '../../data/songs'
import {FETCH_SONGS, RESET_SKIP} from '../../../src/shared/reducers/actions'

describe("Reducers ", () => {
    test("FETCH_SONGS concatenates songs to the state", () => {
      const newState =  reducers({}, {type: FETCH_SONGS, songs})  
      expect(newState.songs).toEqual(songs)
    })
    test("RESET_SKIP resets skipped items to 0", () => {
        const newState =  reducers({skip:78}, {type: RESET_SKIP})  
        expect(newState.skip).toEqual(0)
      })
  })