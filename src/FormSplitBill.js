import React, { useState } from 'react'

const FormSplitBill = ({ selectedFriend , onsplittbill}) => {

  const [bill , setBill] = useState("");
  const [padiByUser , setPaidByUser] = useState("");
  const [whoIsPaying , setWhoIsPaying] = useState("user")

  const paidByFriend = bill ? bill - padiByUser : "";

  function handlesubmitbill(e){
    e.preventDefault();

    if(!bill || !paidByFriend) return;
    onsplittbill(whoIsPaying === "user" ? paidByFriend : -padiByUser)
  }

  return (
    <div>
        <form className='form-split-bill' onSubmit={handlesubmitbill}>
            <h2>split a bill with {selectedFriend.name}</h2>

            <lable>🙎🏾Bill value</lable>
            <input type='text' value={bill} onChange={(e) => setBill(Number(e.target.value))}></input>

            <lable>🕴🏾Your expense</lable>
            <input type='text' value={padiByUser} onChange={(e) => setPaidByUser
            (Number(e.target.value) > bill ? padiByUser : Number(e.target.value)
              
              )}></input>

            <lable>🧑‍🤝‍🧑{selectedFriend.name}'s expense</lable>
            <input type='text' disabled value={paidByFriend}></input>

            <label>💰Who is paying the bill?</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>

                <option value="user"> You </option>
                <option value="friend"> {selectedFriend.name}</option>

                
            </select>

            <button className='button'>split bill</button>


        </form>
      
    </div>
  )
}

export default FormSplitBill
