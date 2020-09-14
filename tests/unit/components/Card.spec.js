import React from 'react'
import { shallow , configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import genres from '../../data/genres'
import songsCountByGenre from '../../data/songsCountByGenre'
configure({ adapter: new Adapter() });
import PureCard from '../../../src/shared/components/PureCard'
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Card /> ', () => {
const addgenreId = jest.fn()
const resetPage =()=>{}

const container = shallow(
        <PureCard songsCountByGenre={songsCountByGenre} genre={genres[0]}
           addgenreId={addgenreId} resetPage={resetPage}/>)

  it('should Card have proper title/description', () => {
    const cardTitle = container.find('[data-testid="title"]')
    expect(cardTitle.contains('Jazz')).toEqual(true);
    const buttonText = container.find('[data-testid="button"]').render().text()
    expect(buttonText).toEqual('View 6 Songs')
  })

  it('should save genre Id in redux on store on click', () => {
    const buttonText = container.find('[data-testid="button"]')
    buttonText.simulate('click')
    expect(addgenreId.calledOnce).toBe.true;   
  })

})
