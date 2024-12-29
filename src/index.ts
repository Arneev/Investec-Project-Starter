import { Transaction } from './interfaces/transaction';

const beforeTransaction = async (authorization) => {
  // 2 seconds lifetime for beforeTransaction
  return true;
};

const afterTransaction = async (transaction: Transaction) => {
  // 15 seconds lifetime for afterTransaction
  console.log(`We finished transact the following transaction: ${transaction}`);

  console.log('We finished process the transaction');
};

const afterDecline = async (transaction: Transaction) => {
  console.log(`The following transaction was declined: ${transaction}`);
};
