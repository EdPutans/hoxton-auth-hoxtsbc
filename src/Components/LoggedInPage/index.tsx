import { User, Transaction } from '../../utils/types';
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
    <div>
      <div className='logged-in-page__bottom'>
        <Card header="Welcome," text={fullName}>
        </Card>
        <Card header={`$ ${amountInAccount}`} text='Current amount in account'>
        </Card>
      </div>
      <div>
        <Card header='Recent transactions'>
          {transactions.map(({ amount, currency, isPositive, receiverOrSender }) =>
            <div>
              <p>{receiverOrSender} | {isPositive ? '+' : '-'}{currency}{amount}</p>
            </div>
          )}
        </Card>
        <div className='logged-in-page__logout-container'>
          <Button text='Log out' handleClick={handleLogout} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(LoggedInPage)
