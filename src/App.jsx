import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Contact from './pages/contact'
import Blog from './pages/blog'
import About from './pages/about'




function App() {
  return  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}  />
            <Route path='shop' element={<Shop />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='About' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
}

export default App
