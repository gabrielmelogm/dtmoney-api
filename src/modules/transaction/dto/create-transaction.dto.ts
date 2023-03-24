import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  type: string;

  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDateString()
  createdAt: string;
}
