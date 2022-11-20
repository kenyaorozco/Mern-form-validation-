import React from "react";

const DataForm = (props) => {
    // console.log(props.newUser);
    // const [data,setData] = useState("")

    return (
        <>
        <h1>Your Data Form</h1>

        <p>
            First Name :{props.newUser.first}<br />
            Last Name: {props.newUser.last} <br />
            Email:{props.newUser.email}<br />
            Password: {props.newUser.password} <br />
            Conform Password: {props.newUser.confirm}
        </p>
        </>
        
    )
}

export default DataForm;