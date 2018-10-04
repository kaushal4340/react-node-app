import React, {Component} from 'react'
import '../../styles/products.css'
import Layout from './Layout'
import fetch from 'isomorphic-fetch'

class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
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

  render () {
    return (
      <Layout products={this.state.products} />
    )
  }
}

export default ProductsContainer
