import './App.css';
import { Home, Upload, Files } from './views/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/files' element={<Files />} />
      </Routes>
    </>
  )
}

export default App;