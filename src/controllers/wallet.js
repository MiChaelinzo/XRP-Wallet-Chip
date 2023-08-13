import * as WalletService from '../services/wallet';

const create = (req, res) => res.send(WalletService.create());

const getBalance = ({ params: { ethAddress = null } }, res) => {
  WalletService.getBalance(ethAddress).then(
    balance => res.send(balance),
    error => res.status(error.errorCode || 200).send(error)
  );
};

const transaction = ({ body }, res) => {
  WalletService.transaction(body).then(
    transaction => res.send(transaction),
    error => res.status(error.errorCode || 200).send(error)
  );
};

export { create, getBalance, transaction };
