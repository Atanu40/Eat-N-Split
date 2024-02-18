import React, { useState, useEffect  } from 'react'
import './BillFormComponent.css'

function BillForm(props) {

  const { listArray,selectIndex,onBill } = props;

  const [bill,setBil] = useState();
  const [expense,setExpense] = useState();
  const friendExpense = bill & expense ? Math.abs(bill - expense ) : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  useEffect(() => {
    setBil("");
    setExpense("");
  }, [selectIndex]);

  const onBillFunction = (e) => {
    setBil(Number(e.target.value));
  }

  const onUserExpense = (e) => {
    setExpense(Number(e.target.value));
  }

  const onWhoPay = (e) => {
    setWhoIsPaying(e.target.value);
  }

  const onBillSubmit = (e) => {
    e.preventDefault();
    if (!bill || !expense) {
      return alert("Please fill in the bill and expense");
    }
    onBill(whoIsPaying === "user" ? friendExpense : -expense , selectIndex);
  }

  return (
    <div>
      <form className='bill-form' onSubmit={onBillSubmit}>
        <h2>
          Split a bill with { 
            listArray.map((item, index) => {
            const result = item.id === selectIndex ? item.name : "";
            console.log(result);
            return result;
          })
         }
        </h2>
        <div className='form-per-content'>
          <label>
          💰 Bill value
          </label>
          <input type="text" value={bill} onChange={onBillFunction} />
        </div>
        <div className='form-per-content'>
          <label>
          🧍‍♀️ Your expense
          </label>
          <input type="text" value={expense} onChange={onUserExpense}/>
        </div>
        <div className='form-per-content'>
          <label>
          👫 {listArray.map((item, index) => {
            const result = item.id === selectIndex ? item.name : "";
            console.log(result);
            return result; 
          })} expense
          </label>
          <input type="text" disabled value={friendExpense}/>
        </div>
        <div className='form-per-content'>
          <label>🤑 Who is paying the bill</label>
          <select value={whoIsPaying} onChange={onWhoPay}>
            <option value={"user"}>You</option>
            <option value={"friend"}>
              { 
                listArray.map((item, index) => {
                const result = item.id === selectIndex ? item.name : "";
                console.log(result);
                return result;
                })
              }
           </option>
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
