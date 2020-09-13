import express from 'express'
const genreRouter = express.Router()
import Type from '../models/Genre'

genreRouter.post('/', async(req, resp) => {
    try{
    await Type.create({...req.body})
    resp.sendStatus(200)
    }catch(error){
        //todo add logger 
        console.log(error)
        return res.status(500).send('An error has occured')  

    }
})

export {genreRouter}