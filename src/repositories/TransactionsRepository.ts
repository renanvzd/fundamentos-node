import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(total: number): Balance {
    const getTotal = this.transactions.reduce(total =>  )
  }

  public create({ income, outcome }: Balance): Transaction {
    const transaction = new Transaction({ income, outcome });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
