import React, { useState } from 'react'
import './ListComponent.css'

function ListComponent(props) {

  const { listArray,onBillClick } = props;
  const [NewArray, setNewArray] = useState(Array(listArray.length).fill(false));

  const onSelect = (id) => {
    const newStatuses = NewArray.map((status, i) => {
      if (i === id) {
        return !status;
      }
      return false;
    });
    setNewArray(newStatuses);
    onBillClick(newStatuses)
  }

  return (
    <div>
      <ul>
        {
          listArray.map((item,index) => {
            return (
              <li key={item.id}>
                <div className="list-item">
                  <div className="list-item-image">
                    <img className='icon-img' src={item.image} alt={item.name} />
                  </div>
                  <div className="list-item-name">
                    <div className='person-name'>{item.name}</div>
                    <div className="list-item-balance">
                      {
                        item.balance > 0
                          ? <span className='positive-balance'>{item.name} owe you {" "}  {Math.abs(item.balance)}€</span>
                          : ""        
                      }

                      {item.balance < 0 && <span className='negative-balance'>You owe {item.name}{" "}{Math.abs(item.balance)}€</span> }

                      {item.balance === 0 && <span className='neutral-balance'>You and {item.name} are even</span>} 
                    </div>
                  </div>
                  <div>
                    <button className="button" onClick={()=>onSelect(index)}>
                      {NewArray[index] ? "Close" : "Select"}
                    </button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListComponent
