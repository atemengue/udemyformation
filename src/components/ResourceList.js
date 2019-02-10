import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ResourceList =  ({ resource }) => {
  const [resources, setResources ] = useState([]);

  // const fetchResource =  async () => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

  //  setResources(response.data) 
  // }

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
  
     setResources(response.data) 
    })(resource);
  },[resource])

  // useEffect(() => {
  //   fetchResource(resource)
  // }, [resource])

    return (<div>{resources.length}</div>
    )
}

export default  ResourceList;

//definition et invocation immediate des fonctions.