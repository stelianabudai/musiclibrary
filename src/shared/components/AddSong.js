import React, { useState } from 'react';
import { connect } from 'react-redux';
import {songSave} from '../../controllers/songsController'
import { useHistory } from "react-router-dom";
import { Button } from 'styled-button-component'
import {
  FormCheck,
  FormCheckInput,
  FormControl,
  FormControlFile,
  FormControlPlainText,
  FormGroup,
  FormInline,
  FormText,
} from 'styled-form-component';


const AddSong = ({addSong, typeId, dispatch}) => {
  const history = useHistory();
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

return(
      <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!name.trim() || !desc.trim()) {
            return
          }
          songSave(name, desc, typeId, addSong, history)     
        }}
      >
        <FormGroup>
        <label>
          Add title<FormControl value={name} placeholder="title" onChange={(e)=>setName(e.target.value)}/>
        </label>
        </FormGroup>
        <FormGroup>
        <label>
          Add description
          <FormControl textarea rows="3" value={desc} type="textarea" onChange={(e)=>setDesc(e.target.value)}/>
        </label>
      </FormGroup>
        <Button type="submit">Add Song</Button>
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

