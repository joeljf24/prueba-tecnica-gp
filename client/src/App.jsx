import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Home, Upload, UserForm, FileForm, ImageForm, Files } from './views/index'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/upload/contact' element={<UserForm />} />
        <Route path='/upload/pdf' element={<FileForm />} />
        <Route path='/upload/image' element={<ImageForm />} />
        <Route path='/files' element={<Files />} />
      </Routes>
    </div>
  )
}

export default App;