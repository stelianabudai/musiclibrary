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

app.get('/', async (req, res) => {
  const scripts = ['vendor.js', 'client.js']
  const genres = await getGenres()
  const songsCountByGenre = await getSongsCountByGenre()
  const initialState = { genres, songsCountByGenre }
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
});


app.listen(3002, () => console.log('Listening on localhost:3002'))
