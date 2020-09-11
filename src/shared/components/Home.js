import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards'

const Home = ({  data }) => {
return (
    <Cards apps={data} totalapps={data.length} />
)}

const mapStateToProps = ({ data }) => ({
  data
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
