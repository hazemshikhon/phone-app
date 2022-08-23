import { useState } from "react";

const UserForm = () =>{
    const [user, setUser] = useState({
name: '',
phone: ''
    });
    return(
<div>
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log('user',user)
    }}>
    <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={(val) =>{
            setUser({
                ...user,
                name: val.target.value
            })
        }} />
    </div>
    <div>
        <label>phone:</label>
        <input type="text" name="phone" onChange={(val) =>{
            setUser({
                ...user,
                phone: val.target.value
            })
        }}  />
    </div>
    <input type="submit" />
    </form>
</div>
)}

export default UserForm;