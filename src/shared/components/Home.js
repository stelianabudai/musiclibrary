import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Error from './Error'

const Home = ({ genres, error }) => {
    if(error){
        return  <Error error={error}/>
    }
    const cards = genres.map((genre) => {
      return(
          <div className="app-card" key={genre.name}>
                <Card genre={genre} ></Card>
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
