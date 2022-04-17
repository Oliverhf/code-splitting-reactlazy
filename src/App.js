import React, {
  createContext,
  useState,
  useEffect,
  lazy,
} from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import axios from "axios";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

export const AppContext = createContext(null);

export default function App() {
  const Home = lazy(() => import("./Pages/Home/Home.jsx"));
  const Settings = lazy(() => import("./Pages/Settings/Settings.jsx"));
  const Topics = lazy(() => import("./Pages/Topics/Topics.jsx"));
  const [theme, setTheme] = usePersistedState("theme", light);

  const [rawData, setRawData] = useState([]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
          setRawData(response.data)
      })
  }, []);


  return (
    <AppContext.Provider value={{ toggleTheme, rawData }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="topics"
                element={<Topics />}
              />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
