import React from 'react'
import './BillFormComponent.css'

function BillForm(props) {

  const { listArray } = props;

  return (
    <div>
      <form className='bill-form'>
        <h2>Split a bill with </h2>
        <div className='form-per-content'>
          <label>
          💰 Bill value
          </label>
          <input type="text" name="name" />
        </div>
        <div className='form-per-content'>
          <label>
          🧍‍♀️ Your expense
          </label>
          <input type="text" name="amount" />
        </div>
        <div className='form-per-content'>
          <label>
          👫 Sara's expense
          </label>
          <input type="text" name="amount" />
        </div>
        <div className='form-per-content'>
        <label>🤑 Who is paying the bill</label>
        <select>
          <option >You</option>
          <option >gg</option>
        </select>
        </div>

        <div className='form-per-content'>
          <div></div>
          <button className="button form-btn">Split bill</button>
        </div>
      </form>
      
    </div>
  )
}

export default BillForm
