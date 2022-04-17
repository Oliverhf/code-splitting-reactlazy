import React, { createContext, useState, useEffect, useCallback, lazy} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import axios  from "axios";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import {
  BrowserRouter, 
  Routes,
  Route,

} from 'react-router-dom'

export const AppContext = createContext(null);



export default function App() {
  const Home = lazy(() => import("./Pages/Home/Home.jsx")) ;
  const Settings = lazy(() => import("./Pages/Settings/Settings.jsx")) ;
  const Topics = lazy(() => import("./Pages/Topics/Topics.jsx")) ;
  const [theme, setTheme] = usePersistedState('theme', light);


  const [rawData, setRawData] = useState({
   user1: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user2: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user3: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user4: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user5: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user6: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user7: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
   user8: {
    email: "",
    id: "",
    description:  "",
    name: ""
   },
  })
  

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };




  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
       setRawData({
         user1: {
          email: response.data[0].email,
          id: response.data[0].id,
          description: response.data[0].body,
          name: response.data[0].name
         },
         user2: {
          email: response.data[1].email,
          id: response.data[1].id,
          description: response.data[1].body,
          name: response.data[1].name
         },
         user3: {
          email: response.data[2].email,
          id: response.data[2].id,
          description: response.data[2].body,
          name: response.data[2].name
         },
         user4: {
          email: response.data[3].email,
          id: response.data[3].id,
          description: response.data[3].body,
          name: response.data[3].name
         },
         user5: {
          email: response.data[4].email,
          id: response.data[4].id,
          description: response.data[4].body,
          name: response.data[4].name
         },
         user6: {
          email: response.data[5].email,
          id: response.data[5].id,
          description: response.data[5].body,
          name: response.data[5].name
         },
         user7: {
          email: response.data[6].email,
          id: response.data[6].id,
          description: response.data[6].body,
          name: response.data[6].name
         },
         user8: {
          email: response.data[7].email,
          id: response.data[7].id,
          description: response.data[7].body,
          name: response.data[7].name
         },
       })
        console.log("COME HERE")
      })
  },[])

  const returnData = useCallback((user) => {
    return rawData
  },[rawData])

  return (
    <AppContext.Provider value={{toggleTheme, rawData}}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
        <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route  exact path='/' element={<Home />} />
          <Route  path='topics' element={<Topics returnData={returnData} />} />
          <Route  path='settings' element={<Settings />}/>
        </Routes>
        </React.Suspense>
        
        </BrowserRouter>
  
       
      </ThemeProvider>
    </AppContext.Provider>

  );
}


