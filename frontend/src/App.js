import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from '../src/screens/HomeScreen'
import ProductScreen from '../src/screens/ProductScreen'
import CartScreen from '../src/screens/CartScreen'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
export default App
