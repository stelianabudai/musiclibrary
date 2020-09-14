import axios from 'axios';

const typesSave = (name, desc, dispatch, history, dispatchError) => {
    axios.post('/genre', {name, desc})
        .then((res) => {
            dispatch(name, desc, res.data._id)
            history.push('/home');
            console.log(res.status)
        }).catch((error) => {
            console.log(error)
            dispatchError(error)
        });
}

export {typesSave}