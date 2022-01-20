import Navbar from './components/Navbar.js'
import CreateBlog from './components/CreateBlog.js'
import Error404 from './components/Error404.js'

import Home from './components/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-root">
        <Navbar />
        <div className='App-content'>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/createblog' element={<CreateBlog/>} />
            <Route path='/*' element={<Error404/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;