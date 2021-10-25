import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser, getTaskPending, getTaskCompleted, getUserAll } from './action/action'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Create from './components/createCard/Create'
import Register from './components/acunt/register/Register'
import Login from './components/acunt/login/Login'
import './App.css'


function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTaskCompleted())
    dispatch(getTaskPending())
    dispatch(getUserAll())

    if(localStorage.user){

      let user = JSON.parse(localStorage.user)

      dispatch(getUser(user.email, user.password))
    }

  },[dispatch])

  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        
        <Route exact path='/' component={Home}/>
        <Route path='/addCard' component={Create} />
        <Route path= '/register' component={Register} />
        <Route path= '/login' component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
