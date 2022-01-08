import React, {useState} from "react";
import {Box, Button, Container, TextField} from "@mui/material";
import {useHistory} from 'react-router-dom';

const Login = (props) => {
    let history = useHistory();
    const [userName, setUserName] = useState("");

    const handleChange = (event) => setUserName(event.target.value)

    const handleSubmit = (event) => {
        const {name, value} = event.currentTarget[0]
        localStorage.setItem(name, value)
        history.push("/auditLog")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={userName}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}

export default Login