import React from 'react'
import PureCard from './PureCard'
import { connect } from 'react-redux'
import { CHANGE_GENRE_ID, RESET_SKIP } from '../reducers/actions'


const Card = ({genre, songsCountByGenre, addgenreId, resetPage}) => {
    return <PureCard genre={genre} songsCountByGenre={songsCountByGenre} 
         addgenreId={addgenreId} resetPage={resetPage}/>
        
}

const mapStateToProps = ({songsCountByGenre }) => ({
    songsCountByGenre
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addgenreId: (genreId) => dispatch({ type: CHANGE_GENRE_ID, genreId }),
    resetPage: () => dispatch({ type: RESET_SKIP}),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card)
  
  