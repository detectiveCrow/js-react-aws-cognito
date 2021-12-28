import React, { useState, useContext } from 'react';
import { AccountContext } from './Accounts';
import { Paper, TextField, Button } from '@mui/material';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
        window.location.reload();
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
  };

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
        SIGN IN
      </Button>
    </Paper>
  );
};