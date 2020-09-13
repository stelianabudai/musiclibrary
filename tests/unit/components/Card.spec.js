import React from 'react'
import { shallow , configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import genres from '../../data/genres'
import songsCountByGenre from '../../data/songsCountByGenre'


configure({ adapter: new Adapter() });
import PureCard from '../../../src/shared/components/PureCard';

describe('<Card /> ', () => {
const addgenreId =()=>{}
//const onChange = jest.fn()

const resetPage =()=>{}

const container = shallow(
        <PureCard songsCountByGenre={songsCountByGenre} genre={genres[0]}
           addgenreId={addgenreId} resetPage={resetPage}/>)

  it('should Card have proper title/description', () => {
    expect(container.contains('Jazz')).toEqual(true);
    const cardTitle = container.find('[data-testid="title"]')
    expect(cardTitle.contains('Jazz')).toEqual(true);
    const buttonText = container.find('[data-testid="button"]').render().text()
    expect(buttonText).toEqual('View 6 Songs')
  })

})