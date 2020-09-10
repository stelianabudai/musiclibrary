import React, { useRef } from 'react';
import { connect } from 'react-redux';


const Add = ({addType, dispatch}) => {
  const input = useRef(null)

return(
      <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.current.value.trim()) {
            return
          }
          addType(input.current.value, 'dddddddd')
          input.current.value = ''
        }}
      >
        <input ref={input} />
        <button type="submit">Add Todo</button>
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

