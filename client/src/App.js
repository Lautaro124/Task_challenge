import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import './App.css'


function App() {

  console.log('Estamos sinedo loopeados')
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
