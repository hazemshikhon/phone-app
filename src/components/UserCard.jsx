const UserCard = ({ele}) =>{
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
      </div>
    )
}


export default UserCard