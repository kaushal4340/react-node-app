import fetch from 'isomorphic-fetch'

const Actions = {
  insert (model) {
    console.log('insert prodct : ', model)
    fetch('http://localhost:3002/api/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
    .then(response => {
      response.json().then(json => {
        console.log('add response : ', json)
        window.location.replace('/')
      })
    })
    .catch(err => {
      console.log('error while iunsert = ', err)
    })
  }
}

export default Actions
