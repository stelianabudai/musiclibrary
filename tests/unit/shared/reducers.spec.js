import reducers from '../../../src/shared/reducers'
import songs from '../../data/songs'
import {FETCH_SONGS} from '../../../src/shared/reducers/actions'

describe("Reducers ", () => {
    test("FETCH_SONGS concatenates songs to the state", () => {
      const newState =  reducers({}, {type: FETCH_SONGS, songs})  
      expect(newState.songs).toEqual(songs)
    });
  });