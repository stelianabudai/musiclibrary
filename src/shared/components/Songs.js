import React, { useEffect } from 'react'
import {fetchSongs} from '../../controllers/songsController'
import { connect } from 'react-redux';
import { Table, Tr } from 'styled-table-component'
import { Button, ButtonGroup } from 'styled-button-component'
import {FETCH_SONGS, CHANGE_SKIP} from '../reducers/actions'
import styled from 'styled-components'


const Label = styled.label`
    font-size: 1.25em;
    padding-left: 3em;
    padding-top: 0.25em;
    min-width: 20em;
`;

const Songs = ({limit, skip, genreId, genres, songs=[], songsCountByGenre, saveSongs, changeSkip}) => {

    const nextPage = () => {
        changeSkip(skip + limit)
    }

    const previousPage = () => {
        changeSkip(skip - limit)
    }

    useEffect(() => {
        fetchSongs(limit, skip, genreId, saveSongs)
    }, [skip, limit, genreId, saveSongs])

    const rows= songs.map(songs => 
        <Tr light><td>{ songs.name } </td><td>{ songs.artist } </td><td>{ songs.desc } </td></Tr>
    )

    const totalNoSongs = songsCountByGenre.find(g => g._id ===genreId).count

    return (<div> 
        <ButtonGroup>
            <Button disabled={skip < limit} onClick={previousPage}> Previous Page </Button> 
            <Button disabled={skip + limit >= totalNoSongs} onClick={nextPage}> Next Page </Button>
        </ButtonGroup>
        <Label>Genre: {genres.find(g =>g._id === genreId).name}</Label>
        <Table>
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Artist</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
         <tbody>      
          {rows}
         </tbody>
        </Table>
        </div>
    )
}


const mapStateToProps = ({ genres, limit, skip, genreId, songs, songsCountByGenre}) => ({
    genres,
    limit,
    skip,
    genreId,
    songs,
    songsCountByGenre
  });
  
  const mapDispatchToProps = (dispatch) => ({
    saveSongs: (songs) => dispatch({ type: FETCH_SONGS, songs}),
    changeSkip: (skip) => dispatch({ type: CHANGE_SKIP, skip })
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Songs);
  
  
