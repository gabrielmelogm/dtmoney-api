import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transaction.service';

@Controller('transactions')
// @UseGuards(AuthGuard('jwt'))
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async getTransactions() {
    return await this.transactionsService.getTransactions();
  }

  @Post()
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return await this.transactionsService.createTransaction(
      createTransactionDto,
    );
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionsService.deleteTransaction(id);
  }
}
