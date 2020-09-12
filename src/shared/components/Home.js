import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Home = ({ genres }) => {
    const cards = genres.map((app, index) => {
      return(
        <div className="app-card" key={app.name}>
          <Card app={app} ></Card>
        </div>
      )})
      return cards
}

const mapStateToProps = ({ genres }) => ({
  genres,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
