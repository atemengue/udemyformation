import React, { Component } from 'react'
import axios from 'axios';

class ResourceList extends Component {
  state= { resources: [] };

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resources}`)

    this.setState({ resources: response.data})
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (prevProps.resources !== this.props.resources) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resources}`)

      this.setState({ resources: response.data})
    }
  } 

  render() {
    return (
      <div>
         {this.state.resources.length}
      </div>
    )
  }
}
export default  ResourceList;