import React, { Component } from 'react'
import Modal from '../components/Modal';

const actions = (
  <>
    <button className="ui button negative">Delete</button>
    <button className="ui button">Cancel</button>
  </>
)

class StreamDelete extends Component {
  render() {
    return (
      <div>
        StreamDelete
        <Modal 
          title="Delete Stream"
          content = "Are you sure you want to delete this stream"
          actions={actions}
        />
      </div>
    );
  }
}

export default StreamDelete;