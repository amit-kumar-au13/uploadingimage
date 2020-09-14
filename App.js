import React, { useState } from 'react'

import './App.css'

function App() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'lcziklos')
    
    setLoading(true)
    const res = await fetch(
      '		https://api.cloudinary.com/v1_1/deohzraix/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="App">
    <h1> Flat Details</h1>
        <h2>
        <label>
    Name:
    <input type="text" name="name" />
  </label>
        
  </h2> 
        <h3>
        <label>
    Address:
    <input type="text" name="name" />
        </label>
        </h3> 
      <h4>Upload Image</h4>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h5>Loading...</h5>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  )
}

export default App