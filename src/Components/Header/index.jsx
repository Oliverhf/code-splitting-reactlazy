import React, {useContext} from 'react'
import { AppContext } from '../../App'
import Switch from 'react-switch'
import * as S from './styles'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import {  Link  } from 'react-router-dom'

const Header = () => {

    const { colors , title } = useContext(ThemeContext)

    const {toggleTheme} = useContext(AppContext)

  return (
    <S.Container>
        <header>Hello world
        <nav>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/topics">Topics</Link>
        </nav>
        </header>
        
        <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={50}
            handleDiameter={20}
            offColor={shade(0.15, colors.secondary)}
            onColor={colors.primary}
        />
    </S.Container>
  )
}

export default Header