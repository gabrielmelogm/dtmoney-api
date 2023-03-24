import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../lib/prisma.service';
import { CreateTransactionDto } from '../../dto/create-transaction.dto';
import { Transaction } from '../../entities/transaction.entity';
import { transactionRepository } from '../transaction.repository';

@Injectable()
export class PrismaTransactionRepository implements transactionRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Transaction[] | any> {
    return await this.prisma.transactions.findMany();
  }

  async create(transaction: CreateTransactionDto): Promise<void> {
    await this.prisma.transactions.create({
      data: {
        title: transaction.title,
        category: transaction.category,
        type: transaction.type,
        amount: transaction.amount,
        createAt: transaction.createdAt,
      },
    });
  }
}