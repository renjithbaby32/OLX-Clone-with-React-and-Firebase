import React, { Fragment, useContext, useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context'


const Create = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)

 const history = useHistory()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    firebase.storage().ref(`/image/${image.name}`)
      .put(image).then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: Date.now().toString()
          })
          history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" value={price} name="Price" onChange={(e) => {
              setPrice(e.target.value)
            }} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ' '} ></img>
            <br />
          <input type="file" onChange={(e) => {
                setImage(e.target.files[0])
            }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
