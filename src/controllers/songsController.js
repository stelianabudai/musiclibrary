import axios from 'axios'

const fetchSongs= (limit, skip, genreId, dispatch) => {
    axios.get(`/songs?limit=${limit}&skip=${skip}&genreId=${genreId}`)
    .then((response) => {
        dispatch(response.data) 
    })
    .catch((error) => {
        console.log(error)
    })   
}

const songSave = (name, desc, artist, genreId, dispatch, history) => {
    
    axios.post('/songs', {name, desc, genreId, artist})
        .then((response) => {
            dispatch(name, desc, genreId),
            history.push('/songs');
        }).catch((error) => {
            console.log(error)
        })
}


export {fetchSongs, songSave}