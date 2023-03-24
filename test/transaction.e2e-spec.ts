import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TransactionsModule } from '../src/modules/transaction/transaction.module';
import { transactionRepository } from '../src/modules/transaction/repositories/transaction.repository';

describe('TransactionController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TransactionsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/transactions (GET)', async () =>
    await request(app.getHttpServer()).get('/transactions').expect(200));

  it('/transactions (POST)', async () => {
    const data = {
      title: 'Teste',
      category: 'Teste',
      type: 'deposit',
      amount: 0.01,
      createdAt: new Date(),
    };

    return await request(app.getHttpServer())
      .post('/transactions')
      .send(data)
      .expect(201);
  });
});
