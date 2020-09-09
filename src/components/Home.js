import React from 'react';
import { connect } from 'react-redux';
import Card from './Card'

const Home = ({ initialText, changeText, data }) => {
return (
  <div>
    <p>{initialText}</p>
    <Card apps={data} totalapps={data.length} />
    <button onClick={changeText}>change text!</button>
  </div>
)};

const mapStateToProps = ({ initialText, data }) => ({
  initialText,
  data
});

const mapDispatchToProps = (dispatch) => ({
  changeText: () => dispatch({ type: 'CHANGE_TEXT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
