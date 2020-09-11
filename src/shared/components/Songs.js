import React, { useEffect } from 'react'
import {fetchSongs} from '../../controllers/songs'
import { connect } from 'react-redux';

import {
    useParams
  } from "react-router-dom";


const Songs = ({limit=1, skip=0, songs, saveSongs, changeSkip}) => {
    const { typeId } = useParams();
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

    return (<div> 
        <ul> 
            { 
               songs? songs.map(songs => 
                    <li> 
                        <span> { songs.name } </span>
                        <span> { songs.desc } </span>
                    </li>
                ):<></>
            }
        </ul>
        <div> 
            <button onClick={nextPage}> Previous Page </button>
            <button onClick={previousPage}> Next Page </button> 
            <button onClick={lastPage}> Last Page </button> 
        </div>
    </div>)
}


const mapStateToProps = ({ initialText, data, limit, skip, typeId, songs}) => ({
    initialText,
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
  
  
