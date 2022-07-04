import React from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes";


export const AppRouter = () => {
   const isAuth = false
   return (
      <Router>
         <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
               <Route key={path} path={path} element={Component} />
            )}
            {publicRoutes.map(({ path, Component }) =>
               <Route key={path} path={path} element={Component} />
            )}
         </Routes>
      </Router>

   )
}