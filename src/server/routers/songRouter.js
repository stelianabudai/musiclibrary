import express from 'express'
const songRouter = express.Router()
import Song from '../models/Song'

songRouter.post('/', async(req, resp) => {
    await Song.create({...req.body})
    resp.sendStatus(200)
  })
  
songRouter.get('/', async(req, resp) =>{
    const typeId = req.query.typeId
    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)
    try{
      const songs =  await Song.find({typeId : typeId}).skip(skip).limit(limit) 
      return resp.json(songs)
    }
    catch(err){
      //todo use datadog and log err in there
      console.log('error', err)
      resp.sendStatus(500)
    }
  })

export {songRouter}