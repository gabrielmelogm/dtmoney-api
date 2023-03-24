import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../entities/transaction.entity';

export abstract class transactionRepository {
  abstract getAll(): Promise<Transaction[]>;

  abstract create(transaction: CreateTransactionDto): Promise<void>;
}
