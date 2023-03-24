import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transaction/transaction.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TransactionsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
