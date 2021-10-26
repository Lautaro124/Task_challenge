import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { autoLogin, getTaskPending, getTaskCompleted, getUserAll } from './action/action'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Create from './components/createCard/create.jsx'
import Register from './components/acunt/register/Register'
import Login from './components/acunt/login/Login'
import Edit from './components/edit/Edit'
import './App.css'


function App() {

  const dispatch = useDispatch()
  /// dispatchado de informacion
  useEffect(()=> {
    dispatch(getTaskCompleted())
    dispatch(getTaskPending())
    dispatch(getUserAll())

    if(localStorage.user){

      let user = JSON.parse(localStorage.user)

      dispatch(autoLogin(user))
    }

  },[dispatch])

  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        {/* Rutas */}
        <Route exact path='/' component={Home}/>
        <Route path='/addCard' component={Create} />
        <Route path= '/register' component={Register} />
        <Route path= '/login' component={Login} />
        <Route path= '/edit' component={Edit}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
