import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from '../src/screens/HomeScreen'
import ProductScreen from '../src/screens/ProductScreen'
import CartScreen from '../src/screens/CartScreen'
import LoginScreen from '../src/screens/LoginScreen'
import RegisterScreen from '../src/screens/RegisterScreen'
import ProfileScreen from '../src/screens/ProfileScreen'
import ShippingScreen from '../src/screens/ShippingScreen'
import PaymentScreen from '../src/screens/PaymentScreen'
import PlaceOrderScreen from '../src/screens/PlaceOrderScreen'
import OrderScreen from '../src/screens/orderScreen'

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/order/:id" component={OrderScreen} />
					<Route path="/shipping" component={ShippingScreen} />
					<Route path="/payment" component={PaymentScreen} />
					<Route path="/placeorder" component={PlaceOrderScreen} />
					<Route path="/login" component={LoginScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/profile" component={ProfileScreen} />
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
					<Route path="/" component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}
export default App
