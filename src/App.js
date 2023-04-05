import React from 'react'
import Main from './Components/Main'
//import Login from './Components/Login'
import'./App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommendations from './Components/Recommendations';
import  Anime  from './Components/Anime';
import SignIn from './Components/SignIn';
import SignUp from './SignUp';
// import Link from './Components/Link';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route index element={<Main/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/recom" element={<Recommendations/>}>
          </Route>
        <Route path="/anime" element={<Anime/>}>
</Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App