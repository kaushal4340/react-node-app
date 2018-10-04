import React from 'react'

class ProductCard extends React.Component {
  render () {
    let {productName, price, manufacturer} = this.props.product
    return (
      <div className='product-card' >
        <h3>{productName}</h3>
        <div>{price} $</div>
        <div>{manufacturer}</div>
      </div>
    )
  }
}

export default ProductCard
