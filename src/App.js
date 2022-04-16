import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import axios  from "axios";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { Home, Settings, Topics } from "./Pages/index";
import {
  BrowserRouter, 
  Routes,
  Route,

} from 'react-router-dom'

export const AppContext = createContext(null);

function App() {

  const [theme, setTheme] = usePersistedState('theme', light);

  const [data, setData] = useState({
    email: "",
    id: "",
    description:  "",
    name: ""
  });
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
       setData({
         email: response.data[0].email,
         id: response.data[0].id,
         description: response.data[0].body,
         name: response.data[0].name
       })
        console.log(data)
      })
  },[])

  return (
    <AppContext.Provider value={{toggleTheme, data}}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='topics' element={<Topics />} />
          <Route  path='settings' element={<Settings />}/>
        </Routes>
        
        </BrowserRouter>
  
       
      </ThemeProvider>
    </AppContext.Provider>

  );
}

export default App;
