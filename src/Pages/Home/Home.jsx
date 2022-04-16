import React, { useContext } from 'react'
import * as S from './styles'
import {Button, Header} from '../../Components'
import { AppContext } from '../../App'



const Home = () => {
  const {data} =  useContext(AppContext)
  console.log(data)

  return (
    <div>
        <Header/>
        <S.Container>
        <S.Aside>
          <Button />
           {data ? <>
            <h3>
            {data.name}
            </h3>
            <i>{data.email}</i>
            <p>{data.description}</p>
            
            <p>Id<strong>{data.id}</strong></p>
          
           </> : <strong>Data not found</strong>}
        </S.Aside>
        <S.Main>

        </S.Main>
        </S.Container>
      
    </div>
  )
}

export default Home