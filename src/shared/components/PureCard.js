import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {
    Card as StyledCard,
    CardBody,
    CardText,
    CardTitle,
  } from 'styled-card-component';

const Button = styled.button`
  width: '18rem'
`

const PureCard = ({genre, songsCountByGenre, addgenreId, resetPage}) => {
    const history = useHistory();
    const song = songsCountByGenre.find(s => s._id === genre._id)

    return (    
            <StyledCard>
            <CardBody>
            <CardTitle data-testid="title" h3>{genre.name}</CardTitle>
            <CardText>{genre.desc}</CardText>
                    <Button data-testid="button" onClick={() => { addgenreId(genre._id); resetPage(); history.push('/songs');} }>View {song? song.count:0} Songs</Button>
            </CardBody>
        </StyledCard>
        )
}

  export default PureCard
  
  