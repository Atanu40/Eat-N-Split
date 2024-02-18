import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import List from './ListComponent/ListComponent'
import AddFriend from './AddFriendComponent/AddFriend.jsx'
import BillFrom  from './BillFormComponent/BillForm.jsx'

function App() {

  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [showAddFrom, setShowAddFrom] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);
  const [selectedFriendIndex, setSelectedFriendIndex] = useState(null);

  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  }

  const billClick = (newArray,selectIndex) => {
    console.log(newArray);
    setSelectIndex(selectIndex);
    console.log(selectIndex);

    setSelectedFriendIndex((prevIndex) => {
      // If clicking on the same index, toggle the state
      console.log(prevIndex);
      return prevIndex === selectIndex ? null : selectIndex;
    });
  };
 
  const onAdd = () => {
    setShowAddFrom(!showAddFrom);
  }

  const onBillRcd = (bill,selectId) => {
    setFriends((friends)=>{
      return friends.map((friend,index) => {
        if(friend.id === selectId){
          return {
            ...friend,
            balance: friend.balance + bill
          }
        }
        return friend;
      })
    });
  }

  return (
    <>
     <div className='page-width'>
        <div className='top-btm-padding'>
          <div className='large-device'>
            <div className='left-side'>
              <List listArray={friends} onBillClick={billClick} />
              {showAddFrom && <AddFriend listArray={initialFriends} onAddFriend={addFriend}/>}
              
              <div className='add-btn-content'>
                <div></div>
                <button className='button btn-add' onClick={onAdd}>
                  {showAddFrom ? "Cancel" : "Add Friend"}
                </button>
              </div>
             
            </div>
            <div className='right-side'>
              <div className='right-side-content'>
                {selectedFriendIndex !== null && <BillFrom listArray={friends} selectIndex={selectIndex} onBill={onBillRcd}/>} 
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
