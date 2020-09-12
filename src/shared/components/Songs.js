import React, { useEffect } from 'react'
import {fetchSongs} from '../../controllers/songsController'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Table, Tr } from 'styled-table-component'
import { Button, ButtonGroup } from 'styled-button-component'


const Songs = ({limit=5, skip=0, typeId, songs=[], saveSongs, changeSkip}) => {
    const history = useHistory();

    const nextPage = () => {
        changeSkip(skip + limit)
    }

    const previousPage = () => {
        if(skip < limit){
            return
        } 
        changeSkip(skip - limit)
    }

    const lastPage = () => {
        changeSkip(skip - limit)
    }

    useEffect(() => {
        fetchSongs(limit, skip, typeId, saveSongs)
    }, [skip, limit, typeId, saveSongs])

    const rows= songs.map(songs => 
        <Tr light><td>{ songs.name } </td><td>{ songs.desc } </td></Tr>
    )

    return (<div> 
        <ButtonGroup>
            <Button onClick={previousPage}> Previous Page </Button> 
            <Button onClick={nextPage}> Next Page </Button>
            <Button onClick={lastPage}> Last Page </Button> 
        </ButtonGroup>
        <Table>
         <tbody>      
          {rows}
         </tbody>
        </Table>
       
        <ButtonGroup>
           <Button onClick={()=> history.push('/addSong')}> Add Song </Button>
        </ButtonGroup>
        </div>
    )
}


const mapStateToProps = ({ data, limit, skip, typeId, songs}) => ({
    data,
    limit,
    skip,
    typeId,
    songs
  });
  
  const mapDispatchToProps = (dispatch) => ({
    saveSongs: (songs, limit) => dispatch({ type: 'FETCH_SONGS', songs, limit}),
    changeSkip: (skip) => dispatch({ type: 'CHANGE_SKIP', skip })
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Songs);
  
  
