import axios from 'axios';

const typesSave = (name, desc, dispatch, history, sendError) => {
    axios.post('/genre', {name, desc})
        .then((res) => {
            dispatch(name, desc, res.data._id)
            history.push('/home');
        }).catch((error) => {
            console.log('error', error)
            sendError(500)
            history.push('/home');
        });
}

export {typesSave}