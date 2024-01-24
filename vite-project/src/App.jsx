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

  return (
    <>
     <div className='page-width'>
        <div className='top-btm-padding'>
          <div className='large-device'>
            <div className='left-side'>
              <List listArray={initialFriends}/>
              <AddFriend listArray={initialFriends}/>
            </div>
            <div className='right-side'>
              <BillFrom />
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
