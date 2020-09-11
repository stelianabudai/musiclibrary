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

const songSave = (name, description, typeId, dispatch, history) => {
    axios.post('/addSong', {name: name.value, description: description.value, typeId})
        .then((res) => {
            dispatch(name.value, description.value)
            name.value = ''
            description.value = ''
            history.push('/songs');
        }).catch((error) => {
            console.log(error)
        });
}


export {fetchSongs, songSave}