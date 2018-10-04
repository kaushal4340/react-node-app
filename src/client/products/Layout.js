import React from 'react'
import Card from './ProductCard'

class Layout extends React.Component {
  render () {
    return (
      <div className='fluid-container products'>
        <div className='row'>
          {
            this.props.products.map((product) => {
              return (
                <div className='col-lg-2 col-md-2 col-sm-2'>
                  <Card product={product} />
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
