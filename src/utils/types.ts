
export type Transaction = {
  id: string;
  amount: number;
  currency: string;
  receiverOrSender: string;
  completedAt: string;
  isPositive: boolean;
}

export type User = {
  id: number;
  email: string;
  fullName: string;
  amountInAccount: number;
  transactions: Transaction[]
}

export type RequestBody = Record<string, any>
