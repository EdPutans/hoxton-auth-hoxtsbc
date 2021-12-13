import React, { Suspense } from 'react';
import './App.css';
import Card from './Components/Card';
import TextField from './Components/TextField';
import { User } from './utils/types';
import * as api from '././utils/api';

const App = function () {
  const [userData, setUserData] = React.useState<User | null>(null);

  React.useEffect(() => {
    api.signInWithJWT()
      .then(resp => setUserData(resp.data));
  }, [])
  // const isLoggedIn = !!userData;

  return (
    <div className="App">
      <header>
        <img src='./src/logo.png' style={{ maxHeight: '100%' }} />
      </header>
      <main className="App-header">
        <Suspense fallback='loading...'>
          <Card text=' Please log in to access your account' header='Welcome to HoxtSBC'>
            <TextField handleChange={() => { }} value='' type='email' />
            <TextField handleChange={() => { }} value='' type='password' />
          </Card>
        </Suspense>
      </main>

    </div>
  );
};

export default App;
