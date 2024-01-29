import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

//COMPONENTES
import Landing from './view/landing/landing';
import Home from './view/home/home'
import Detail from './view/detail/detail';
import Create from './view/create/create';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="details/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
