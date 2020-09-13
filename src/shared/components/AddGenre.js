import React, {useState} from 'react';
import { connect } from 'react-redux';
import {typesSave} from '../../controllers/typesController'
import { useHistory } from "react-router-dom";
import { Button } from 'styled-button-component'
import {ADD_TYPE} from '../reducers/actions'
import {
  FormControl,
  FormGroup,
} from 'styled-form-component';

const AddGenre = ({addType, dispatch}) => {
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
          typesSave(name, desc, addType, history)  
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
        <Button type="submit">Add Type</Button>
      </form>
    </div>
)};

const mapStateToProps = ({ genres }) => ({
  genres
});

const mapDispatchToProps = (dispatch) => ({
  addType: (name, description, typeId) => dispatch({ type: ADD_TYPE, name, description, typeId}),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGenre);

