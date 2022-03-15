import { Injectable } from '@nestjs/common';
import { BooksQuery } from './books-query.dto';
import { HttpService } from '@nestjs/axios';
import { BooksQueryResult } from './book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly httpService: HttpService) {}
  
  async findAll(booksQuery: BooksQuery): Promise<BooksQueryResult> {
    const url = new URL(`${process.env.GOOGLE_API}/volumes`)
    url.search = new URLSearchParams(booksQuery as unknown as URLSearchParams).toString();
    console.log(url.toString())
    const response = await this.httpService.get(url.toString()).toPromise()
    return response.data as BooksQueryResult;
  }
}
