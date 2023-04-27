import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import Home from './components/Home.js'
import Bbasic from './components/Bbasic.js'
import About from './components/About.js'
import Start from './components/Start.js'
import Invest from './components/Invest.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'


export default function App(){


  //IF TOKEN NAVIGATE TO ALL CLASSES PAGE

  const { token, logout, user } = useContext(UserContext)


  return (
    <div className="app">
    { token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to="/home"/> : <Auth />}
        />
     
        <Route 
          path="/home"
          element={<ProtectedRoute token={token}>
              <Home/>
          </ProtectedRoute>}
        />
        <Route 
          path="/about"
          element={<ProtectedRoute token={token}>
              <About/>
          </ProtectedRoute>}
        />
        <Route 
          path="/public"
          element={<ProtectedRoute token={token}>
              <Public/>
          </ProtectedRoute>}
        />
         <Route 
          path="/invest"
          element={<ProtectedRoute token={token}>
              <Invest/>
          </ProtectedRoute>}
        
        />
         <Route 
          path="/start"
          element={<ProtectedRoute token={token}>
              <Start/>
          </ProtectedRoute>}
        /> 
        <Route
        path={"/Bbasic"}
        element={<ProtectedRoute token={token}>
              <Bbasic/>
        </ProtectedRoute>}
        />
     
      </Routes>
    </div>
  )
}