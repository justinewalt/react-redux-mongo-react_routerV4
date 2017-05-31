import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const NoteForm = ({ dispatch }) => {
  let title, body, form;

  return (
    <div>
      <h5 className="center">Add A Note</h5>
      <form
        ref={node => form = node}
        onSubmit={e => {
          e.preventDefault();
          dispatch(addNote(title.value, body.value))
          form.reset();
        }}
      >
        <input ref={node => title = node} placeholder="Title???" />
        <textarea ref={node => body = node} placeholder="Sexy body goes here..."></textarea>
        <button className="btn">Save</button>
      </form>
    </div>
  )
}

// When you connect a component you get dispatch as a prop
// mapStateToProps - grabs state out of redux and passes it as props
export default connect()(NoteForm);