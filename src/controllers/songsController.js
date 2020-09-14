import axios from 'axios';

const fetchSongs= (limit, skip, genreId, dispatch) => {
    axios.get(`/songs?limit=${limit}&skip=${skip}&genreId=${genreId}`)
    .then((response) => {
        dispatch(response.data) 
    })
    .catch((error) => {
        console.log(error)//todo more advanced client lib
        //dipatch show 404 page or 500 page

    });    
}

const songSave = (name, desc, artist, genreId, dispatch, history, dispatchError) => {
    
    axios.post('/songs', {name, desc, genreId, artist})
        .then((response) => {
            dispatch(name, desc, genreId),
            history.push('/songs');
            console.log(res.status)

        }).catch((error) => {
            console.log(error)
            dispatchError(error)
        });
}


export {fetchSongs, songSave}