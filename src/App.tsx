import React from 'react';
import './App.css';
import { User } from './utils/types';
import * as api from '././utils/api';
import SignedOutPage from './Components/SignedOutPage';
import LoggedInPage from './Components/LoggedInPage';



const App = function () {
  const [userData, setUserData] = React.useState<User | null>(null);

  React.useEffect(() => {
    api.signInWithJWT()
      .then(resp => {
        if (!resp?.data) {
          console.error('Error in signInWithJWT', resp);
          return;
        }
        setUserData(resp.data)
      });
  }, [])


  return (
    <div>
      <header>
        <img src='./src/logo.png' style={{ maxHeight: '100%' }} />
      </header>
      <main>
        {userData ? <LoggedInPage userData={userData} /> : <SignedOutPage />}
      </main>
    </div>
  );
};

export default App;
