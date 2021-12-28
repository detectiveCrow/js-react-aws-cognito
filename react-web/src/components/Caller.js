import React, { useState, useContext } from "react";
import { AccountContext } from './Accounts';
import axios from "axios";
import Pool from '../UserPool';

import { Button, Card } from '@mui/material';

const Caller = () => {
    const [token, setToken] = useState("");
    const [result, setResult] = useState("nothing...");
    const { getSession } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();
        getSession()
          .then(session => {
            setToken(session.idToken.jwtToken);
          });

        axios.get(process.env.REACT_APP_AWS_API_GATEWAY_URL, {
          headers: {
            'Authorization': token
          }
        })
          .then(res => {
            setResult(res.data.body);
          })
          .else(error => {
            console.error(error);
          });
    }

    return (
      <div>
        <Button
          onClick={onSubmit}
          variant="contained"
        >
          Test API Gateway
        </Button>

        <Card variant="outlined" sx={{ mt: 2, p: 3 }}>{result}</Card>
      </div>
        
    );
}

export default Caller;