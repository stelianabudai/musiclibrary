import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards'

const Home = ({ data, songsCountByGenre }) => {
return (
    <Cards apps={data} songsCountByGenre={songsCountByGenre} />
)}

const mapStateToProps = ({ data, songsCountByGenre }) => ({
    data,
    songsCountByGenre
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
