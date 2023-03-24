import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TransactionsModule } from '../src/modules/transaction/transaction.module';

describe('TransactionController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TransactionsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  let data = {
    id: '',
    title: 'Teste',
    category: 'Teste',
    type: 'deposit',
    amount: 0.01,
    createdAt: new Date(),
  };

  it('/transactions (GET)', async () =>
    await request(app.getHttpServer()).get('/transactions').expect(200));

  it('/transactions (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/transactions')
      .send(data);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');

    data = response.body;
  });

  it('/transactions (DELETE)', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/transactions/${data?.id}`)
      .send(data);

    expect(response.statusCode).toBe(200);
  });
});
