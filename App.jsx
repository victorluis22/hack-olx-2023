import './App.css'

import Header from './Components/Header';
import Announce from './Pages/Announce';
import Register from './Pages/Register';

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import Verification from './Pages/Verification';
import Result from './Pages/Result';
import ConfirmData from './Pages/ConfirmData';


function App() {
  const pages = [
    {url: "/", element: <Register />},
    {url: "/verification", element: <ConfirmData />},
    {url: "/verification/final", element: <Verification />},
    {url: "/verification/final/:result", element: <Result />},
    {url: "/announce", element: <Announce/>},
  ]

  return (
    <div className='App'>
      <Router basename="hack-olx-2023">
        <Header />
        <Routes>
          {pages.map((eachPage) => {
            return <Route path={eachPage.url} element={eachPage.element}/>
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App