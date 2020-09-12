import React from 'react'

import Card from './Card'

const Cards = ({ apps, songsCountByGenre }) => {
  const cards = apps.map((app, index) => {
    const song = songsCountByGenre.find(s => s._id === app._id)
  return(
    <div className="app-card" key={app.name}>
      <Card app={app} count={song? song.count:0} ></Card>
    </div>
  )})
  return cards
}

export default Cards;
