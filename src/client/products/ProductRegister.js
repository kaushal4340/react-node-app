import React from 'react'
import Formsy from 'formsy-react'
import {Label, Button} from 'reactstrap'
import autobind from 'react-autobind'
import Input from '../shared/Input'
import Actions from '../Utils/actions'

class ProductRegister extends React.Component {
  constructor (props) {
    super(props)
    autobind(this)
  }

  submit (model) {
    Actions.insert(model)
  }

  render () {
    return (
      <div className='registerform'>
        <h2>Register Product</h2>
        <Formsy onValidSubmit={this.submit}>
          <Label>Product Name</Label>
          <Input name='productName' type='text' />
          <Label>Product Price</Label>
          <Input name='price' type='text' />
          <Label>Manufacturer</Label>
          <Input name='manufacturer' type='text' />
          <Button>SUBMIT</Button>
        </Formsy>
      </div>

    )
  }
}

export default ProductRegister
