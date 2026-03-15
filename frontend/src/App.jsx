import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Navbar from './pages/Navbar'
import Sidebar from './pages/Sidebar'
import Jobs from './pages/Jobs'
import Register from './pages/Register.jsx'
import SavedJobs from './pages/SavedJobs.jsx'
import Profile from './pages/Profile.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'
// import Home from './pages/Home.jsx'


const App = () => {
  const location = useLocation()

  const hideLayout = location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgotpassword'

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Sidebar />}

      <Routes>
        <Route path='/' element={<UserLogin />} />
        <Route path='/register' element={<Register />} />

        <Route path='/jobs' element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        } />

        <Route path='/savedjobs' element={
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        } />

        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
