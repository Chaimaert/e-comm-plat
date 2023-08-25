import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Contact from './pages/contact'
import Blog from './pages/blog'
import About from './pages/about'
import Cart from './pages/cart'
import Login from './pages/login'
import Shopcontext from './components/shopcontext'
import Details from './pages/details'




function App() {
  return  <>
    <Shopcontext>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}  />
              <Route path='shop' element={<Shop />} />
              <Route path='contact' element={<Contact />} />
              <Route path='blog' element={<Blog />} />
              <Route path='about' element={<About />} />
              <Route path='cart' element={<Cart />} />
              <Route path='login' element={<Login />} />
              <Route path='details' element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Shopcontext>
    </>
}

export default App
