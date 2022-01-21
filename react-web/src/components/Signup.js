import React, { useState } from "react";
import UserPool from "../UserPool";
import { Paper, TextField, Button } from '@mui/material';

const Signup = () => {
    const [cognitoUser, setCognitoUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const signUp = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, result) => {
            if (err) {
                console.error(err)
            }
            console.log(result)
            setCognitoUser(result.user);
        });
    }

    const confirmCode = (event) => {
        event.preventDefault();

        cognitoUser.confirmRegistration(confirm, true, (err, result) => {
            if (err) {
                console.error(err)
            }
            console.log(result)
        })
    }

    return (
        <div>
            <Paper components="form" onSubmit={signUp} sx={{ p: 3, mb: 2 }}>
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
                    onClick={signUp}
                    variant="contained"
                    fullWidth
                >
                    SIGN UP
                </Button>
            </Paper>
            <Paper components="form" onSubmit={confirmCode} sx={{ p: 3, mb: 2 }}>
                <TextField
                    label={"Confirm"}
                    value={confirm}
                    onChange={(event) => setConfirm(event.target.value)}
                    fullWidth
                    sx={{ mb: 1 }}
                />
                <Button
                    onClick={confirmCode}
                    variant="contained"
                    fullWidth
                >
                    SIGN UP
                </Button>
            </Paper>
        </div>
    );
}

export default Signup;