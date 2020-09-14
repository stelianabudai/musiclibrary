import express from 'express'
const songRouter = express.Router()
import {createSong, getSongsPaginated} from '../services/songsService'
songRouter.post('/', async(req, resp) => {
    try{
      await createSong({...req.body})
    //resp.sendStatus(200)
    return res.status(500).send('An error has occured')  

    }catch(error){
        //todo add logger 
        console.log(error)
        return res.status(500).send('An error has occured')  
    }
  })
  
songRouter.get('/', async (req, resp) =>{
    const genreId = req.query.genreId
    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)
    try{
      const songs = await getSongsPaginated(genreId, skip, limit) 
      return resp.json(songs)
    }
    catch(err){
      //todo use datadog and log err in there
      console.log('error', err)
      return res.status(500).send('An error has occured')  
    }
  })

export {songRouter}