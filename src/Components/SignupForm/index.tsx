import React from 'react'
import Button from '../Button';
import TextField from '../TextField';
import * as api from '../../utils/api';

type State = {
  email: string;
  password: string;
  repeatPassword: string;
  fullName: string;
}

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const SignupForm = ({ isOpen, handleClose }: Props) => {
  const [values, setValues] = React.useState<State>({ email: '', password: '', repeatPassword: '', fullName: '' });
  const [error, setError] = React.useState<string>('');

  if (!isOpen) return null;

  const getHandleChange = React.useMemo(() => (key: string) => {

    return (val: string) => setValues({ ...values, [key]: val });
  }, [setValues, values])

  const handleSubmit = React.useCallback(() => {
    return api.handleSignUp(values).then((r: any) => {
      if (r.error) return setError(r.error);

      // feel free to improve the UX ;)
      return handleClose();
    })
  }, [values])

  return (
    <div className="SignupForm_modal" onClick={handleClose}>
      <form className='SignupForm_form'>
        <TextField value='test' placeholder='email' handleChange={getHandleChange('email')} />
        <TextField value='test' placeholder='password' type='password' handleChange={getHandleChange('password')} />
        <TextField value='test' placeholder='password' type='password' handleChange={getHandleChange('repeatPassword')} />
        <TextField value='test' placeholder='email' handleChange={getHandleChange('email')} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type='submit' text="Register" handleClick={handleSubmit} />
      </form>
    </div>
  )
}

export default SignupForm
