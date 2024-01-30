import './App.css';
import { Route, Routes } from 'react-router-dom'

//COMPONENTES
import Landing from './view/landing/landing';
import Home from './view/home/home'
import Detail from './view/detail/detail';
import Create from './view/create/create';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
