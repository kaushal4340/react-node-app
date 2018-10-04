import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductsContainer from './products/ProductsContainer'
import ProductRegister from './products/ProductRegister'

class AppRouter extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Link to='/'>Products</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='/addproduct'>Add Product</Link>
          <hr />

          <Route exact path='/' component={ProductsContainer} />
          <Route path='/products' component={ProductsContainer} />
          <Route path='/addproduct' component={ProductRegister} />
        </div>
      </Router>
    )
  }
}

export default AppRouter