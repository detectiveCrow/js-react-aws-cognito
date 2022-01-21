import React, { useState, useContext } from "react";
import { AccountContext } from './Accounts';
import * as axios from "axios";

import { Button, ButtonGroup, Card } from '@mui/material';

const Caller = () => {
    const [token, setToken] = useState("");
    const [result, setResult] = useState("nothing...");
    const { getSession } = useContext(AccountContext);

    const onSubmit = resource => event => {
        event.preventDefault();

        getSession()
          .then((session) => {
            setToken(session.idToken.jwtToken);
          });

        axios.get(process.env.REACT_APP_AWS_API_GATEWAY_URL + resource, {
          headers: {
            'Authorization': token
          }
        })
          .then(res => {
            console.log(res)
            setResult(res.data)
          })
          .catch(error => {
            console.error(error)
          });
    }

    return (
      <div>
        <ButtonGroup size="small" aria-label="button group">
          <Button
            onClick={onSubmit('/hello')}
            variant="contained"
          >
            /hello
          </Button>

          <Button
            onClick={onSubmit('/quote')}
            variant="contained"
          >
            /quote
          </Button>

          <Button
            onClick={onSubmit('/numbers')}
            variant="contained"
          >
            /numbers
          </Button>

          <Button
            onClick={onSubmit('/auth')}
            variant="contained"
          >
            /auth
          </Button>
        </ButtonGroup>

        <Card variant="outlined" sx={{ mt: 2, p: 3 }}>{result}</Card>
      </div>
        
    );
}

export default Caller;