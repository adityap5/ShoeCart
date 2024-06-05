
import './App.css'
import HomePage from './Pages/HomePage'
import Product from './customer/components/Product/Product'
import Navigation from './customer/components/Navigation/Navigation'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Footer from './customer/components/Footer/Footer'
import Checkout from './customer/components/Checkout/Checkout'


function App() {


  return (
    <>
    <Navigation/>
    <div>
      {/* <HomePage/>  */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      <Checkout/>
    </div>
    <Footer/>
    </>
  )
}

export default App
