import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {typesSave} from '../../controllers/types'
import { useHistory } from 'react-router-dom';
import {ADD_TYPE} from '../shared/reducers/actions'

const Add = ({addType}) => {
  const input = useRef(null)
  const description = useRef(null)
  const history = useHistory();

return(
      <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.current.value.trim() || !description.current.value.trim()) {
            return
          }
          typesSave(input.current, description.current, addType, history)        
        }} 
      >
        <input ref={input}/>
        <br/><br/>
        <textarea type="textarea" ref={description}/>
        <button type="submit">Add Type</button>
      </form>
    </div>
)};

const mapStateToProps = ({ genres }) => ({
  genres
});

const mapDispatchToProps = (dispatch) => ({
  addType: (name, description) => dispatch({ type: ADD_TYPE, name, description, songs:[] }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);

