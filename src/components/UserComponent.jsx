import React, { useState } from  'react';
import DataForm from './DataComponent';
    
    
const UserForm = (props) => {
    // USER FORM INPUT 
    const [first, setFirstname] = useState("");
    const [last, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("")  

    const [newUser,setNewUser] = useState("")
// USER VALIDATION
    const [nameError,setNameError] = useState(false);
    const [lnameError,setLnameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false)
    const [confirmP,setConfirmError] = useState(false)

    const checkName = (e) => {
        console.log("hello");
        setFirstname(e.target.value);
        if(e.target.value.length < 2){
            setNameError(true)
        }else{
            setNameError(false)
        }
    }

    const checkLname = (e) => {
        // console.log("hello");
        setLastname(e.target.value);
        if(e.target.value.length < 2){
            setLnameError(true)
        }else{
            setLnameError(false)
        }
    }
    const checkEmail = (e) => {
        // console.log("hello");
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
    }
    const checkPassword = (e) => {
        // console.log("hello");
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }
    }
    const checkConfirm = (e) => {
        // console.log("hello");
        setConfirm(e.target.value);
        if(password !== e.target.value){
            setConfirmError(true)
        }else{
            setConfirmError(false)
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first,last, email, password,confirm };
        // console.log("Welcome", newUser);
        setNewUser(newUser)
    };
    
    return(
        <fieldset>

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ checkName} />
                {nameError ? (<p>must be 2 or more char</p>) : (<p></p>)}

            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ checkLname } />
                {lnameError ? (<p>must be 2 or more char</p>) : (<p></p>)}

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ checkEmail } />
                {emailError ? (<p>must be at least 5 char</p>) : (<p></p>)}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ checkPassword } />
                {passwordError ? <p>password must be longer than 8 char</p> : <p></p>}
                {}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ checkConfirm } />
                {confirmP ? <p>Passwords must match</p> : <p></p>}
            </div>
            <input type="submit" value="Create User" />
        </form>
        <hr />
        <DataForm newUser={newUser}/>
        
        </fieldset>
    )
}
    
export default UserForm