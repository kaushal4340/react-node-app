import React, {Component} from 'react'
import '../../styles/products.css'
import Layout from './Layout'
import fetch from 'isomorphic-fetch'
import autobind from 'react-autobind'

class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
    autobind(this)
  }

  componentDidMount () {
    // fetch call here
    fetch('http://localhost:3002/api/productlist')
      .then(response => {
        response.json().then(json => {
          this.setState({ products: json.data })
        })
      })
  }

  removeProduct (productId) {
    const self = this
    fetch(`http://localhost:3002/api/removeProduct/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        response.json().then(json => {
          self.setState({ products: json.data })
        })
      })
  }

  render () {
    return (
      <Layout
        removeProduct={this.removeProduct}
        products={this.state.products} />
    )
  }
}

export default ProductsContainer
