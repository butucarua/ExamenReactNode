import { Body, Controller, Delete, Get, NotFoundException, Post, Put } from '@nestjs/common';

import { BookService } from '@/domain/shelf/sub-domain/book/book.service';
import { CreateBookDto } from '@/domain/shelf/sub-domain/book/dto/create-book.dto';
import { BookEntity, BookGenres } from '@/domain/shelf/sub-domain/book/entities/book.entity';
import { UpdateBookDto } from '@/domain/shelf/sub-domain/book/dto/update-book.dto';
import { DeleteResult } from 'typeorm';
import { ShelfService } from '@/domain/shelf/shelf.service';


@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService, private readonly shelfService: ShelfService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto): Promise<BookEntity> {
    const shelf = await this.shelfService.getById({ id: createBookDto.shelfId })

    if (!shelf) {
      throw new NotFoundException('This shelf does not exist')
    }
    return this.bookService.createBook(createBookDto, shelf);
  }

  @Put('')
  updateBook(@Body() updateBookDto: UpdateBookDto): Promise<BookEntity> {
    return this.bookService.updateBook(updateBookDto);
  }

  @Get('id')
  getBookById(@Body() id: string): Promise<BookEntity> {
    return this.bookService.getById(id);
  }

  @Get('')
  async getAllBooks(): Promise<BookEntity[]> {
    return this.bookService.getAll();
  }

  @Delete('')
  deleteBookById(@Body('id') id: string): Promise<DeleteResult> {
    return this.bookService.deleteById(id);
  }

  @Get('genres')
  getAllGenres(): BookGenres[] {
    return this.bookService.getAllGenres();
  }
}
