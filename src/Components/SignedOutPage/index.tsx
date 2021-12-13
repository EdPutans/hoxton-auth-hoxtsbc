import React, { useState } from 'react'
import './style.css';
import Card from '../Card';
import Button from '../Button';
import TextField from '../TextField';


const SignedOutPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = React.useCallback(() => {

  }, [])

  return (
    <Card text=' Please log in to access your account' header='Welcome to HoxtSBC'>
      <TextField handleChange={() => { }} value='' type='email' />
      <TextField handleChange={() => { }} value='' type='password' />
      <Button text='Log in' handleClick={handleLogin} />
    </Card>
  )
}

export default React.memo(SignedOutPage);
