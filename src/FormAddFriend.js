import React, { useState } from 'react'

const FormAddFriend = ({onAddfriend , onselection}) => {
  const [name , SetName] = useState("");
  const [image , SetImage] = useState("https://i.pravatar.cc/48");

  function handlesubmit(e){
    e.preventDefault();
    
    const id = crypto.randomUUID();

     const NewFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance:0,
     
     }
     onAddfriend(NewFriend)
     SetName("");
     SetImage("https://i.pravatar.cc/48")
  }
  return (
    <div>
        <form className='form-add-friend' onSubmit={handlesubmit}>
            <lable>😎Friend name</lable>
            <input type='text' value={name} onChange={(e) => SetName(e.target.value)}></input>
            <label>🌄 Image url</label>
            <input type='text' value={image} onChange={(e) => SetImage(e.target.value)}></input>

            <Button onClick={onselection}>Add</Button>

        </form>
      
    </div>
  )
}

export default FormAddFriend

function Button({children}){
    return (
        <button className='button'>{children}</button>
    )
}

