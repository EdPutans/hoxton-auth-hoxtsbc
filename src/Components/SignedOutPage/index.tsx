import React, { useState } from 'react'
import './style.css';
import Card from '../Card';
import Button from '../Button';
import TextField from '../TextField';

const SignedOutPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = React.useCallback(() => { }, [])

  return (
    <Card text=' Please log in to access your account' header='Welcome to HoxtSBC'>
      <TextField handleChange={setEmail} value={email} type='email' />
      <TextField handleChange={setPassword} value={password} type='password' />
      <div className='signedOutPage_button-container'>
        <Button text='Log in' handleClick={handleLogin} />
      </div>
    </Card>
  )
}

export default React.memo(SignedOutPage);
