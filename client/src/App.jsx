import './App.css'

import {BrowseRouter, Route, Routes} from 'react-router-dom'
    

function App() {
  return (
    <div className='App'>
      <h1>POKEMONES</h1>
      <BrowseRouter>
        <Routes>
          <Route path={'/'} component={Landing}/>
        </Routes> 
      </BrowseRouter>
    </div>
  )
}

export default App
