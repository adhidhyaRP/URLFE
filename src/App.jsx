import {BrowserRouter,Routes,Route, useNavigate, Navigate} from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/Login'
import Home from './components/Home'
import Forgotpassword from './components/Forgotpassword'
import Resetpassword from './components/Resetpassword'
// import Layout from './components/Layout'
// import Profile from './components/Profile'

const ProtectedRoute = ({element}) =>{
  const navigate = useNavigate()
  const isloggedin = localStorage.getItem("authorised")
  if(isloggedin){
    return element

  }
  else{
    
    return <Navigate to='/login'/>
  }
}

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/forgotpassword'element={<Forgotpassword/>}></Route>
      <Route path='/' element={<ProtectedRoute element={<Home/>}/>}></Route>
      
      
      <Route path='/resetpassword/:id/:token' element={<Resetpassword/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App