import React from 'react'
import Card from './ProductCard'

class Layout extends React.Component {
  render () {
    return (
      <div className='fluid-container products'>
        <div className='row'>
          {
            this.props.products.map((product, index) => {
              return (
                <div key={index} className='col-lg-2 col-md-2 col-sm-2'>
                  <Card removeProduct={this.props.removeProduct} product={product} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Layout
