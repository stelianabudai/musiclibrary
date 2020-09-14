import axios from 'axios'

const fetchSongs= (limit, skip, genreId, dispatch, sendError) => {
    axios.get(`/songs?limit=${limit}&skip=${skip}&genreId=${genreId}`)
    .then((response) => {
        dispatch(response.data) 
    })
    .catch((error) => {
        console.log(error)
        sendError(error)
    })   
}

const songSave = (name, desc, artist, genreId, dispatch, history, sendError) => {   
    axios.post('/songs', {name, desc, genreId, artist})
        .then((response) => {
            dispatch(name, desc, genreId),
            history.push('/songs');
        }).catch((error) => {
            console.log(error)
            sendError(error)
            history.push('/songs');
        })
}

export {fetchSongs, songSave}