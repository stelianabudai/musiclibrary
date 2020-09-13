import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { CHANGE_GENRE_ID, RESET_SKIP } from '../reducers/actions'
import {
    Card as StyledCard,
    CardBody,
    CardText,
    CardTitle,
  } from 'styled-card-component';

const Button = styled.button`
  width: '18rem'
`

const Card = ({genre, songsCountByGenre, addgenreId, resetPage}) => {
    const history = useHistory();
    const song = songsCountByGenre.find(s => s._id === genre._id)

    return (    
            <StyledCard>
            <CardBody>
            <CardTitle h3>{genre.name}</CardTitle>
            <CardText>{genre.desc}</CardText>
                    <Button onClick={() => { addgenreId(genre._id); resetPage(); history.push('/songs');} }>View {song? song.count:0} Songs</Button>
            </CardBody>
        </StyledCard>
        )
}

const mapStateToProps = ({songsCountByGenre }) => ({
    songsCountByGenre
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addgenreId: (genreId) => dispatch({ type: CHANGE_GENRE_ID, genreId }),
    resetPage: () => dispatch({ type: RESET_SKIP}),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card)
  
  