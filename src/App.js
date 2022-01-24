import Navbar from './components/Navbar'
import CreateBlog from './components/CreateBlog'
import Error404 from './components/Error404'
import BlogDetails from './components/BlogDetails'

import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-root">
        <Navbar />
        <div className='App-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/createblog' element={<CreateBlog/>} />
            <Route path='/blogs/:id' element={<BlogDetails/>} />
            <Route path='*' element={<Error404/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;