import { Account } from '../entities/account';

export class AccountAggregate {
  constructor(
    public account: Account
  ) {}
}
