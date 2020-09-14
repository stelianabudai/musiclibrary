import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Home = ({ genres, error= false }) => {
    const cards = genres.map((genre) => {
      return(
        <div>
        {
          !error && <div className="app-card" key={genre.name}>
          <Card genre={genre} ></Card>
        </div>
        }
        {
          error && <div>Please refresh the page; There was a problem</div>
        }
        </div>
      )})
      return cards
}

const mapStateToProps = ({ genres, error }) => ({
  genres,
  error
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
