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
  const [showBillFrom, setShowBillFrom] = useState(false);

  console.log(showBillFrom);

  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  }

  const billClick = (newArray) => {

    const trueIndices = newArray.reduce((acc, status, index) => {
      if (status) {
        acc.push(index);
      }
      return acc;
    }, []);
 
    setShowBillFrom(!showBillFrom);
    console.log(showBillFrom);
  };
  

  const onAdd = () => {
    setShowAddFrom(!showAddFrom);
  }

  return (
    <>
     <div className='page-width'>
        <div className='top-btm-padding'>
          <div className='large-device'>
            <div className='left-side'>
              <List listArray={friends} onBillClick={billClick}/>
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
                {showBillFrom &&  <BillFrom listArray={friends}/>}
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
