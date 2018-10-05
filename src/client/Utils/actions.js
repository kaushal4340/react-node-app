import fetch from 'isomorphic-fetch'

const Actions = {
  insert (model) {
    fetch('http://localhost:3002/api/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
    .then(response => {
      response.json().then(json => {
        window.location.replace('/')
      })
    })
    .catch(err => {
      console.log('error while insert = ', err)
    })
  }
}

export default Actions
