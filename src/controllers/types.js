import axios from 'axios';

const typesSave = (name, description, dispatch, history) => {
    axios.post('/addTypes', {name: name.value, desc: description.value})
        .then((res) => {
            dispatch(name.value, description.value)
            name.value = ''
            description.value = ''
            history.push('/home');
        }).catch((error) => {
            console.log(error)
        });
}

export {typesSave}