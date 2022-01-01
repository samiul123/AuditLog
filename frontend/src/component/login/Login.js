import React, {useState} from "react";
import './Login.css'

const Login = (props) => {
    const [userName, setUserName] = useState("");

    const handleChange = (event) => setUserName(event.target.value)

    const handleSubmit = (event) => {
        const {name, value} = event.currentTarget[0]
        localStorage.setItem(name, value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input placeholder="Username"
                       name="username"
                       type="text"
                       value={userName}
                       onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Login