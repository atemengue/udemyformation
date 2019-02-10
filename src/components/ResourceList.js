import React from 'react';
import useResources from './useResources';


const ResourceList =  ({ resource }) => {
  const resources = useResources(resource);
  // const [resources, setResources ] = useState([]);

  // // const fetchResource =  async () => {
  // //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

  // //  setResources(response.data) 
  // // }

  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
  
  //    setResources(response.data) 
  //   })(resource);
  // },[resource])

  // useEffect(() => {
  //   fetchResource(resource)
  // }, [resource])

    return (<ul>{resources.map(record =>(
      <li key={record.id}>{record.title}</li>
    ))}</ul>
    )
}

export default  ResourceList;

//definition et invocation immediate des fonctions.