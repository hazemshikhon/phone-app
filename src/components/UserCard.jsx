import styles from './userCard.css';

const UserCard = ({ele,removeUser}) =>{
    return(
        <div className="userCard">
        <ul>
          <li>
            <span>Name:</span>{ele.name}
          </li>
          <li>
            <span>City:</span>{ele.city}
          </li>
          <li>
            <span>Phome:</span>{ele.phone}
          </li>
        </ul>
        <div className="delete" onClick={()=>{
          removeUser(ele.id)
        }}>
          x
        </div>
      </div>
    )
}


export default UserCard