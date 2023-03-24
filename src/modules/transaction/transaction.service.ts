import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { transactionRepository } from './repositories/transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(private transactionRepository: transactionRepository) {}

  async getTransactions() {
    return await this.transactionRepository.getAll();
  }

  async createTransaction(createTransactionDto: CreateTransactionDto) {
    return await this.transactionRepository.create(createTransactionDto);
  }
}
