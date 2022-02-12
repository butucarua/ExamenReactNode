import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookController } from '@/domain/shelf/sub-domain/book/book.controller';
import { BookRepository } from '@/domain/shelf/sub-domain/book/book.repository';
import { BookService } from '@/domain/shelf/sub-domain/book/book.service';
import { ShelfModule } from '@/domain/shelf/shelf.module';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository]), ShelfModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
