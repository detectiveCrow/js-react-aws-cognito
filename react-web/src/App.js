import { Account } from './components/Accounts';
import Status from './components/Status';

import Container from '@mui/material/Container';

function App() {
  return (
    <html>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>
    <body>
      <div className="App">
        <Container maxWidth="sm" sx={{ p: 3 }}>
          <Account>
            <Status />
          </Account>
        </Container>
      </div>
    </body>
    </html>
  );
}

export default App;
