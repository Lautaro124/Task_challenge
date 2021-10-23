import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import './App.css'


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
