import { AccountRepository } from '../repositories/account-repository';
import { Account } from '../entities/account';

export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  async createAccount(account: Account): Promise<void> {
    await this.accountRepository.save(account);
  }
}
