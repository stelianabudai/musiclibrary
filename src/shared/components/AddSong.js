import React, { useState } from 'react';
import { connect } from 'react-redux';
import {songSave} from '../../client/controllers/songsController'
import { useHistory } from "react-router-dom";
import { Button } from 'styled-button-component'
import { ADD_SONG, ERROR } from '../reducers/actions'
import {
  FormControl,
  FormGroup,
} from 'styled-form-component';

const AddSong = ({addSong, genres, sendError}) => {
  const history = useHistory();
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [artist, setArtist] = useState("")
  const [genreId, setgenreId] = useState()

return(
      <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!name.trim() || !desc.trim()) {
            return
          }
          songSave(name, desc, artist, genreId, addSong, history, sendError)     
        }}
      >
        <FormGroup>     
         {
           <label>
            Genre<FormControl select placeholder="title" 
                    defaultValue={'DEFAULT'}
                    onChange={(e)=> setgenreId(e.target.value)}>
                      <option value="DEFAULT" disabled>Choose genre ...</option>
                      {genres.map(g => 
                         <option value={g._id}>{g.name}</option>) 
                      }
                 </FormControl>
          </label>        
         }
          <label>
            Title<FormControl value={name} placeholder="title" onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label>
            Artist<FormControl value={artist} placeholder="artist" onChange={(e)=>setArtist(e.target.value)}/>
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

const mapStateToProps = ({ genres}) => ({
  genres 
});

const mapDispatchToProps = (dispatch) => ({
  addSong: (name, description, genreId) => dispatch({ type: ADD_SONG, name, description, genreId }),
  sendError: (status) => dispatch({ type: ERROR, status})
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSong)

