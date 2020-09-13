import express from 'express'
const genreRouter = express.Router()
import Type from '../models/Genre'

genreRouter.post('/', async(req, resp) => {
    try{
         const newGenre = await Type.create({...req.body})
         resp.send(newGenre)
    }catch(error){
        //todo add logger 
        console.log(error)
        return res.status(500).send('An error has occured')  
    }
})

export {genreRouter}