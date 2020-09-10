import React, { useRef } from 'react';
import { connect } from 'react-redux';


const Add = ({addType, dispatch}) => {
  const input = useRef(null)
  const description = useRef(null)

return(
      <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.current.value.trim() || !description.current.value.trim()) {
            return
          }
          addType(input.current.value, description.current.value)
          input.current.value = ''
          description.current.value = ''
        }}
      >
        <input ref={input}/>
        <input ref={description}/>
        <button type="submit">Add Type</button>
      </form>
    </div>
)};

const mapStateToProps = ({ initialText, data }) => ({
  initialText,
  data
});

const mapDispatchToProps = (dispatch) => ({
  addType: (name, description) => dispatch({ type: 'ADD_TYPE', name, description, songs:[] }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);

