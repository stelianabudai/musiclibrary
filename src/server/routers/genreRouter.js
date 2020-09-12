import express from 'express'
const genreRouter = express.Router()
import Type from '../models/Genre'

genreRouter.post('/', async(req, resp) => {
    await Type.create({...req.body})
    resp.sendStatus(200)
})

export {genreRouter}