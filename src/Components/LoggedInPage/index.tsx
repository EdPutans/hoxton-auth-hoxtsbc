import { User } from '../../utils/types';
import React from 'react'

import { handleLogout } from '../../utils/api';
import Button from '../Button';
import Card from '../Card';
import './style.css';

interface Props {
  userData: User
}

const LoggedInPage = ({ userData: { fullName, amountInAccount, transactions } }: Props): JSX.Element => {
  return (
    <>
      <div className='logged-in-page__bottom'>
        <Card header="Welcome," text={fullName}>
        </Card>
        <Card header={`$ ${amountInAccount}`} text='Current amount in account'>
        </Card>
      </div>
      <div>
        <Card header='Recent transactions'>
          <div className='logged-in-page_transactions'>
            {transactions.map(({ amount, currency, isPositive, receiverOrSender }) =>
              <span>
                <p>{receiverOrSender}</p> <p>|</p> <p>{isPositive ? '+' : '-'}{currency}{amount}</p>
              </span>
            )}
          </div>
        </Card>
        <div className='logged-in-page__logout-container'>
          <Button text='Log out' handleClick={handleLogout} />
        </div>
      </div>
    </>
  )
}

export default React.memo(LoggedInPage)
