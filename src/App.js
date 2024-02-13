import React, { useState } from 'react';
import FriendList from './FriendList';
import FormAddFriend from './FormAddFriend';
import FormSplitBill from './FormSplitBill';

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




const App = () => {
  
  

  const [showaddfriend , SetShowFriend] = useState(false)

  const [friends , setFriends] = useState(initialFriends)

  const [selectedFriend , setSelectedFriend] = useState(null);

  function showfriends(){
    SetShowFriend((show) =>!show);

  }
  function handleaddfriend( friend){
    setFriends((friends) => [...friends , friend]);
    SetShowFriend(false);
  }

function handleselection(friend) {
  setSelectedFriend((cur) => cur?.id === friend.id ? null : friend);
  SetShowFriend(false)

}
function handlesplittbill(value){
  setFriends((friends) => friends.map((friend) =>
   friend.id === selectedFriend.id ?
   {...friend , balance: friend.balance + value } : friend))
   setSelectedFriend(null)

}

  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendList friends={friends} 
      selectedFriend={selectedFriend} 
       onSelection={handleselection} />

     {showaddfriend && <FormAddFriend onAddfriend ={handleaddfriend} />}

      <button className='button' onClick={showfriends}>{ showaddfriend ? "Close" : "Add friends"}</button>

      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onsplittbill={handlesplittbill} key={selectedFriend.id}/>}
      
      
    </div>
  )
}

export default App

