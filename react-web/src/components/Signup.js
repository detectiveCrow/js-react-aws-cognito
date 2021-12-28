import React, { useState } from "react";
import UserPool from "../UserPool";
import { Paper, TextField, Button } from '@mui/material';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err)
            }
            console.log(data)
        });
    }

    return (
        <Paper components="form" onSubmit={onSubmit} sx={{ p: 3, mb: 2 }}>
            <TextField
                label={"Email Address"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                sx={{ mb: 1 }}
            />
            <TextField
                label={"Password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                sx={{ mb: 1 }}
            />
            <Button
                onClick={onSubmit}
                variant="contained"
                fullWidth
            >
                SIGN UP
            </Button>
        </Paper>
    );
}

export default Signup;