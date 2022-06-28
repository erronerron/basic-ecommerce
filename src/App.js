import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/Products/ProductsPage/ProductsPage'
import ProductForm from './pages/Products/ProductForm/ProductForm'
import ViewProduct from './pages/Products/ViewProduct/ViewProduct'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProductsPage />}></Route>
          <Route path='/product/:id' element={<ViewProduct />}></Route>
          <Route path='/product/add' element={<ProductForm />}></Route>
          <Route path='/product/:id/edit' element={<ProductForm />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
