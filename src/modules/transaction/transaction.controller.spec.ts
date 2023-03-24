import { PrismaService } from '../../lib/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transaction.controller';
import { TransactionsService } from './transaction.service';

describe('TransactionsController', () => {
  let controller: TransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [TransactionsService, PrismaService],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
