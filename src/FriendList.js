
  
const FriendList = ({ friends , onSelection , selectedFriend }) => {
   
  return (
   <ul>
    {friends.map((friend) =>(
    <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
    ))
      }
      
   </ul>
  )
}

export default FriendList

function Friend({ friend , onSelection , selectedFriend }){

    const isSelected = selectedFriend?.id === friend.id;

    
    
    
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className='red'>
                    you owe {friend.name} {Math.abs(friend.balance)}💲

                </p>
            )}
            {friend.balance > 0 && (
                <p className='green'>
                 {friend.name}  owes you {Math.abs(friend.balance)}💲

                </p>
            )}
            {friend.balance === 0 && (
                <p className='red'>
                    you and {friend.name} are even

                </p>
            )}
            <button className="button" onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"} </button>
        </li>
    )
}

