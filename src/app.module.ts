import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksController } from './book/book.controller';
import { AppService } from './app.service';
import { BooksService } from './book/book.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
