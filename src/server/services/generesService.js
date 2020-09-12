import  Genre from '../models/Genre'

const getGenres = async ()=>{
    return  await Genre.find()
}

export {getGenres}