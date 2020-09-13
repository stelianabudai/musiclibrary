import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Home = ({ genres }) => {
    const cards = genres.map((genre) => {
      return(
        <div className="app-card" key={genre.name}>
          <Card genre={genre} ></Card>
        </div>
      )})
      return cards
}

const mapStateToProps = ({ genres }) => ({
  genres,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
