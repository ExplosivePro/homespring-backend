import { Controller, Get, Query } from '@nestjs/common';
import { BooksQueryResult } from './book.dto';
import { BooksService } from './book.service';
import { BooksQuery } from './books-query.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(@Query() booksQuery: BooksQuery): Promise<BooksQueryResult> {
    return await this.booksService.findAll(booksQuery);
  }
}
