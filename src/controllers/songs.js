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

export {fetchSongs}