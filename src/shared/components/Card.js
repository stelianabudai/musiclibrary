import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Card as StyledCard,
    CardBody,
    CardText,
    CardTitle,
  } from 'styled-card-component';

  const Button = styled.button`
  width: '18rem'
`

const Card = ({app, songsCountByGenre, addTypeId, resetPage}) => {
    const history = useHistory();

    const song = songsCountByGenre.find(s => s._id === app._id)

    return (    
            <StyledCard>
            <CardBody>
            <CardTitle h3>{app.name}</CardTitle>
            <CardText>{app.desc}</CardText>
                    <Button onClick={() => { addTypeId(app._id); resetPage(); history.push('/songs');} }>View {song? song.count:0} Songs</Button>
            </CardBody>
        </StyledCard>
        )
}

const mapStateToProps = ({ data, songsCountByGenre }) => ({
    data, 
    songsCountByGenre
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addTypeId: (typeId) => dispatch({ type: 'CHANGE_TYPE_ID', typeId }),
    resetPage: () => dispatch({ type: 'RESET_SKIP'}),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card)
  
  