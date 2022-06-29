import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductsPage from './pages/Products/ProductsPage/ProductsPage'
import ProductForm from './pages/Products/ProductForm/ProductForm'
import ViewProduct from './pages/Products/ViewProduct/ViewProduct'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <>
      <Router>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<ProductsPage />}></Route>
          <Route path='/product/:id' element={<ViewProduct />}></Route>
          <Route path='/product/add' element={<ProductForm />}></Route>
          <Route path='/product/:id/edit' element={<ProductForm />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
