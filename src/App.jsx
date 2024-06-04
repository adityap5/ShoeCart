
import './App.css'
import HomePage from './Pages/HomePage'
import Product from './customer/components/Product/Product'
import Navigation from './customer/components/Navigation/Navigation'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'

function App() {


  return (
    <>
    <Navigation/>
    <div>
      {/* <HomePage/>  */}
      {/* <Product/> */}
      <ProductDetails/>
    </div>
    </>
  )
}

export default App
