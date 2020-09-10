import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { StaticRouter } from 'react-router';
import data from '../data/data.json'
const bodyParser = require('body-parser');
var cors = require('cors')



import Html from './components/Html';
import App from './components/App';

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use(express.static(path.join(__dirname)));

app.get('/', async (req, res) => {
  const scripts = ['vendor.js', 'client.js'];
  console.log('onserver')

  const initialState = { initialText: 'rendered on the server', data };

  const store = createStore(reducers, initialState);
  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Provider store={store}>
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
  );

  res.send(`<!doctype html>${html}`);
});

app.post('/addType', async(req, resp) => {
  console.log('req.body', req.body)
 resp.send('dsdsds')
})

app.listen(3003, () => console.log('Listening on localhost:3001'));
