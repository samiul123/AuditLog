import React, {useState} from "react";
import {Box, Button, Container, TextField} from "@mui/material";

const Login = (props) => {
    const [userName, setUserName] = useState("");

    const handleChange = (event) => setUserName(event.target.value)

    const handleSubmit = (event) => {
        const {name, value} = event.currentTarget[0]
        localStorage.setItem(name, value)
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
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Sign In
            </Button>
        </Container>
    )
}

export default Login