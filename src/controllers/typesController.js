import axios from 'axios';

const typesSave = (name, desc, dispatch, history) => {
    axios.post('/addTypes', {name, desc})
        .then((res) => {
            dispatch(name, desc)
            history.push('/home');
        }).catch((error) => {
            console.log(error)
        });
}

export {typesSave}