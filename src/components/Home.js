import React from 'react';
import { connect } from 'react-redux';

const Home = ({ initialText, changeText, data }) => {
  console.log('datadata', data)
return (
  <div>
    <p>{initialText}</p>
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
