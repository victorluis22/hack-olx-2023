import React from "react";
import * as s from "./styles";

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

import Header from "../Header";
import Register from "../../Pages/Register";

const RouterPage = () => {
  const pages = [
    {url: "/", element: <Register />}
  ]

  return(
    <s.Container>
      <Header />
      <Router basename="">
        <Header />

        <Routes>
          {pages.map((eachPage) => {
            return <Route path={eachPage.url} element={eachPage.element}/>
          })}
        </Routes>

        {/* <Footer />  */}
      </Router>
    </s.Container>  
  )
}

export default RouterPage
