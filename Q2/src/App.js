import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AllProductsPage from './AllProductsPage'
import ProductDetailPage from './ProductDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<AllProductsPage />}></Route>
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App