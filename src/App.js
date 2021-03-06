import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/App.css';
// import Home from './pages/Home'
import Products from './pages/Products'
import RegisterProfile from './pages/RegisterProfile'
import Header from './components/Header'
import Product from './pages/Product'
import Login from './pages/Login'
import Account from './pages/Account'
import ShoppingCart from './pages/ShoppingCart'
import Order from './pages/Order'
import NotFound from './pages/404'
import { CartProvider } from './AppContext'
import EditProfile from './pages/EditProfile'
import EditProduct from './pages/EditProduct'
import AddProduct from './pages/AddProduct'
import Admin from './pages/Admin'

export default function App() {

  return (
    <Router>
      <CartProvider>
      <div className="App">
        <Header />
        <div className ="Background">
          <div className = "Content">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:product_id" component={Product} />
              <Route exact path='/login' component={Login} />
              <Route exact path ="/register" component={RegisterProfile} />
              <Route exact path ="/account" component={Account} />
              <Route exact path="/cart" component={ShoppingCart} />
              <Route exact path="/account/order" component={Order}/>
              <Route exact path="/account/order/:order_id" component={Order} />
              <Route exact path ="/editprofile" component={EditProfile} />
              <Route exact path ="/editproduct/:product_id" component={EditProduct}/>}/>
              <Route exact path = "/addproduct" component={AddProduct}/>}/>
              <Route exact path='/admin' component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>           
      </div>
      </CartProvider>
    </Router>
  );
}