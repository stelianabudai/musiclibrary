import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../shared/reducers'
import { StaticRouter } from 'react-router'
import bodyParser from  'body-parser'
import cors from 'cors'
import'./db-connect'
import Html from '../shared/components/Html'
import App from '../shared/components/App'
import {getSongsCountByGenre} from './services/songsService'
import {getGenres} from './services/generesService'
import {songRouter} from './routers/songRouter'
import {genreRouter}from './routers/genreRouter'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname)))
app.use('/songs', songRouter)
app.use('/genre', genreRouter)


app.get('/', async (req, res, next) => {
  const scripts = ['vendor.js', 'client.js']
  try{
      const genres = await getGenres()
      const songsCountByGenre = await getSongsCountByGenre()
      const initialState = { genres, songsCountByGenre, limit:5, skip:0}
      const appMarkup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
          <Provider store={createStore(reducers, initialState)}>
          <App />
          </Provider>
        </StaticRouter>
      );
      const html = ReactDOMServer.renderToStaticMarkup(
        <Html
          children={appMarkup}
          scripts={scripts}
          initialState={initialState}
        />
      )

      res.send(`<!doctype html>${html}`)
  }
  catch(error){
    console.log('error', error)
    next(error)
  }
});


app.use(function(err, req, res, next){
  if(err){
    console.log(err);
    return res.status(500).send('An error has occured. Pleas try later')  
  }
});

app.use(function(req, res){
  res.statusCode = 404
  res.send("Page not found!!!!");
});

app.listen(3003, () => console.log('Listening on localhost:3002'))
