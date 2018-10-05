import React from 'react'
import { Button } from 'reactstrap'
import autobind from 'react-autobind'

class ProductCard extends React.Component {
  constructor (props) {
    super(props)
    autobind(this)
  }

  removeProduct () {
    this.props.removeProduct(this.props.product.id)
  }

  // editProduct () {
  //   window.location.replace(`/edit/${this.props.product.id}`)
  // }

  render () {
    let {productName, price, manufacturer} = this.props.product
    return (
      <div className='product-card' >
        <h3>{productName}</h3>
        <div>{price} $</div>
        <div>{manufacturer}</div>

        <div className='remove-button'>
          {/* <Button onClick={this.editProduct}>Edit</Button> */}
          &nbsp;
          <Button onClick={this.removeProduct}>Remove</Button>
        </div>
      </div>
    )
  }
}

export default ProductCard
