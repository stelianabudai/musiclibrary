import axios from 'axios';

const fetchSongs= (limit, skip, typeId, dispatch) => {
    axios.get(`/songs?limit=${limit}&skip=${skip}&typeId=${typeId}`)
    .then((response) => {
        dispatch(response.data) 
    })
    .catch((error) => {
        console.log(error)
    });    
}

const songSave = (name, desc, typeId, dispatch, history) => {
    
    axios.post('/addSong', {name, desc, typeId})
        .then((res) => {
            dispatch(name, desc, typeId)
            history.push('/songs');
        }).catch((error) => {
            console.log(error)
        });
}


export {fetchSongs, songSave}