import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards'
import styled from 'styled-components'


const Section = styled.section`
    display: grid;
    grid-template-rows: 5rem auto;
`

const Header = styled.header`
    background: red;
    grid-row-start: 1;
    grid-row-end: 2;
`

const Main = styled.main`
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Home = ({  data }) => {
return (
    <Section>
        <Main> 
           <Cards apps={data} totalapps={data.length} />
        </Main>
    </Section>
)}

const mapStateToProps = ({ data }) => ({
  data
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
