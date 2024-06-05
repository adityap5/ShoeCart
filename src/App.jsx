
import './App.css'
import HomePage from './Pages/HomePage'
import Product from './customer/components/Product/Product'
import Navigation from './customer/components/Navigation/Navigation'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Footer from './customer/components/Footer/Footer'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'


function App() {


  return (
    <>
    <Navigation/>
    <div>
      {/* <HomePage/>  */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      <OrderDetails/>
    </div>
    <Footer/>
    </>
  )
}

export default App
