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
    <li>{rawData.user1.email}</li>
    <li>{rawData.user1.name}</li>
    <li>{rawData.user1.id}</li>
    <li>{rawData.user1.description}</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </>
  )
}

export default Topics