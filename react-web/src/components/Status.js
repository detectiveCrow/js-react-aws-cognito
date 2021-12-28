import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';
import Signup from './Signup';
import Signin from './Signin';
import Caller from './Caller';

import { Alert, Button } from '@mui/material';

export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      })
  }, []);

  return (
    <div>
      {status ? (
        <div>
          <Alert variant="outlined" severity="success" sx={{ mb: 2 }}>
            You are logged in.
          </Alert>

          <Caller />

          <Button
            onClick={logout}
            variant="outlined"
            color="error"
            fullWidth
            sx={{ mt: 2 }}
          >
            SIGN OUT
          </Button>
        </div>
      ) : (
        <div>
          <Alert variant="outlined" severity="info" sx={{ mb: 2 }}>
            Please login below.
          </Alert>
          
          <Signup />
              
          <Signin />
        </div>
      )}
    </div>
  );
};