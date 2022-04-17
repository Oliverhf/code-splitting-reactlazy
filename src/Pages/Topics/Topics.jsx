import React, {useContext} from 'react'
import { Header } from '../../Components'

import { AppContext } from '../../App'

const Topics = () => {
  const {rawData} =  useContext(AppContext)
  console.log(rawData)


  if(!rawData)
  return <p>Loading..</p>

  return (
  <>
  <Header />
  <h1>Topics</h1>
  <ul>
   {rawData.map((data) => (
     
      <li key={data?.id}>
        <p>{data?.email}</p>
        <p>{data?.name}</p>
        <p>{data?.id}</p>
      </li>
   ))}
   </ul>
  </>
  )
}

export default Topics