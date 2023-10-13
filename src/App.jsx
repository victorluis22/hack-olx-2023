import './App.css'

import Header from './Components/Header';
import AnnouncePage from './Pages/Announce';
import Register from './Pages/Register';

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

function App() {
  const pages = [
    {url: "/", element: <Register />},
    {url: "/announce", element: <AnnouncePage />}
  ]
  return (
    <>
      <Header />
      <Router basename="">
        <Routes>
          {pages.map((eachPage) => {
            return <Route path={eachPage.url} element={eachPage.element}/>
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
