import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transaction/transaction.module';

@Module({
  imports: [TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
