import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transaction.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async getTransactions() {
    return await this.transactionsService.getTransactions();
  }
}