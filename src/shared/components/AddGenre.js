import React, {useState} from 'react';
import { connect } from 'react-redux';
import {typesSave} from '../../controllers/typesController'
import { useHistory } from "react-router-dom";
import { Button } from 'styled-button-component'
import {ADD_GENRE} from '../reducers/actions'
import {
  FormControl,
  FormGroup,
} from 'styled-form-component';

const AddGenre = ({addType, dispatchError}) => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const history = useHistory();

return(
      <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!name.trim() || !desc.trim()) {
            return
          }
          typesSave(name, desc, addType, history, dispatchError)  
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
        <Button type="submit">Add Genre</Button>
      </form>
    </div>
)};
const mapStateToProps = ({  }) => ({
  
});
const mapDispatchToProps = (dispatch) => ({
  addType: (name, description, genreId) => dispatch({ type: ADD_GENRE, name, description, genreId}),
  dispatchError: (error) => dispatch({error})
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGenre);

