import React from 'react'
import { shallow , configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import genres from '../../data/genres'
import songsCountByGenre from '../../data/songsCountByGenre'


configure({ adapter: new Adapter() });
import PureCard from '../../../src/shared/components/PureCard';

describe('<Card /> with no props', () => {
const addgenreId =()=>{}
//const onChange = jest.fn()
const resetPage =()=>{}
  const container = shallow(
    <PureCard songsCountByGenre={songsCountByGenre} genre={genres[0]}
     addgenreId={addgenreId} resetPage={resetPage}/>);
  

  it('should a Jazz title/description', () => {
    console.log('container',  container.debug())
    console.log('dsdsds', container.find('h3').debug())
    expect(container.contains('Jazz')).toEqual(true);
    expect(container.contains('Jazz, musical form, often improvisational, developed by African Americans')).toEqual(true);
  });

  it('should have a password field', () => { /* Similar to above */ });
  it('should have proper props for password field', () => { /* Trimmed for less lines to read */ });
  it('should have a submit button', () => { /* */ });
  it('should have proper props for submit button', () => { /* */ });
});