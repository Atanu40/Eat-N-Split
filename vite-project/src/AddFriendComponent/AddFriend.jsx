import React from 'react'
import './AddFriend.css'

function AddFriend(props) {

  const { listArray } = props;

  return (
    <div>
      <form className='add-form'>
        <div className='form-per-content'>
          <label>
          👫 Friend name
          </label>
          <input type="text" name="name" />
        </div>
        <div className='form-per-content'>
          <label>
          🌄 Image URL
          </label>
          <input type="text" name="image" />
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
