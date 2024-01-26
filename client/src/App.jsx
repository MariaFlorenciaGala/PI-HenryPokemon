import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Views/Home/Home'
import Detail from './Views/Detail/Detail'
import Create from './Views/Create/Create'
import Landing from './Views/Landing/Landing'
import Nav from './Components/Nav/Nav'
    

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
          <Route path={'*'} element={<Nav />}/>
      </Routes>
        <Routes>
          <Route exact path={'/'} element={<Landing />}/>
          <Route path={'/home'} element={<Home />}/>
          <Route path={'/detail:id'} element={<Detail />}/>
          <Route path={'/create'} element={<Create />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
