import React, { useState } from 'react'
import './AddFriend.css'

function AddFriend(props) {

  const { listArray,onAddFriend } = props;

  const [name,setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const onName = (e) => {
    setName(e.target.value);
  }

  const onImage = (e) => {
    setImage(e.target.value);
  }

  const id = crypto.randomUUID();

  const onAddSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0
    }
    onAddFriend(newFriend); 
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <div>
      <form className='add-form' onSubmit={onAddSubmit}>
        <div className='form-per-content'>
          <label>
          👫 Friend name
          </label>
          <input type="text" value={name} onChange={onName}/>
        </div>
        <div className='form-per-content'>
          <label>
          🌄 Image URL
          </label>
          <input type="text" value={image} onChange={onImage}/>
        </div>

        <div className='form-per-content'>
          <div></div>
          <button className="button form-btn">Add</button>
        </div>
      </form>
      
    </div>
  )
}

export default AddFriend
