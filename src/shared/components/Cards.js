import React from 'react'

import Card from './Card'

const Cards = ({ apps, totalapps }) => {
  const cards = apps.map((app, index) => (
    <div className="app-card" key={app.name}>
      <Card app={app} ></Card>
    </div>
  ))
  return cards
}

export default Cards;
