import { Injectable } from '@nestjs/common';
import { BooksQuery } from './books-query.dto';
import { HttpService } from '@nestjs/axios';
import { BooksQueryResult } from './book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly httpService: HttpService) {}
  
  async findAll(booksQuery: BooksQuery): Promise<BooksQueryResult> {
    const response = await this.httpService.get(`${process.env.GOOGLE_API}/volumes`, {params: {...booksQuery}}).toPromise()
    return response.data as BooksQueryResult;
  }
}
