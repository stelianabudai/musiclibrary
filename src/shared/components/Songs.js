import React, { useEffect } from 'react'
import {fetchSongs} from '../../controllers/songsController'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table, Tr } from 'styled-table-component';

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
        <Table>
         <tbody>
          
         {rows}
         </tbody>
        </Table>
        <div> 
            <button onClick={nextPage}> Previous Page </button>
            <button onClick={previousPage}> Next Page </button> 
            <button onClick={lastPage}> Last Page </button> 
        </div>
        <div>
        <button onClick={()=> history.push('/addSong')}> Add Song </button>
        </div>
    </div>)
}


const mapStateToProps = ({ data, limit, skip, typeId, songs}) => ({
    data,
    limit,
    skip,
    typeId,
    songs
  });
  
  const mapDispatchToProps = (dispatch) => ({
    saveSongs: (songs) => dispatch({ type: 'FETCH_SONGS', songs}),
    changeSkip: (skip) => dispatch({ type: 'CHANGE_SKIP', skip })
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Songs);
  
  
