import React, { useState } from 'react';
import { connect } from 'react-redux';
import {songSave} from '../../controllers/songsController'
import { useHistory } from "react-router-dom";
import { Button } from 'styled-button-component'
import { ADD_SONG } from '../reducers/actions'
import {
  FormControl,
  FormGroup,
} from 'styled-form-component';


const AddSong = ({addSong, genres, dispatch}) => {
  const history = useHistory();
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [typeId, setTypeId] = useState()

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
         {
           <label>
            Genre<FormControl select placeholder="title" 
                    defaultValue={'DEFAULT'}
                    onChange={(e)=> setTypeId(e.target.value)}>
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

const mapStateToProps = ({ genres, songs, typeId }) => ({
  genres, 
  songs
});

const mapDispatchToProps = (dispatch) => ({
  addSong: (name, description, typeId) => dispatch({ type: ADD_SONG, name, description, typeId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSong);

