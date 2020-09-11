import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {songSave} from '../../controllers/songsController'
import { useHistory } from "react-router-dom";


const AddSong = ({addSong, typeId, dispatch}) => {
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
          songSave(input.current, description.current, typeId, addSong, history)     
        }}
      >
        <input ref={input}/>
        <br/><br/>
        <textarea type="textarea" ref={description}/>
        <button type="submit">Add Song</button>
      </form>
    </div>
)};

const mapStateToProps = ({ data, songs, typeId }) => ({
  data, 
  songs,
  typeId
});

const mapDispatchToProps = (dispatch) => ({
  addSong: (name, description, typeId) => dispatch({ type: 'ADD_SONG', name, description, typeId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSong);

