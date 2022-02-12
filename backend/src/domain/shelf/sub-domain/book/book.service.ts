import { ShelfEntity } from "@/domain/shelf/entities/shelf.entity";
import { BookRepository } from "@/domain/shelf/sub-domain/book/book.repository";
import { CreateBookDto } from "@/domain/shelf/sub-domain/book/dto/create-book.dto";
import { UpdateBookDto } from "@/domain/shelf/sub-domain/book/dto/update-book.dto";
import { BookEntity, BookGenres } from "@/domain/shelf/sub-domain/book/entities/book.entity";
import { Injectable } from "@nestjs/common";
import { DeleteResult } from "typeorm";

@Injectable()
export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async createBook(createbookDto: CreateBookDto, shelf: ShelfEntity): Promise<BookEntity> {
    return await this.bookRepository.createBook(createbookDto, shelf);
  }

  async updateBook(updateBook: UpdateBookDto): Promise<BookEntity> {
    return this.bookRepository.updateBook(updateBook);
  }

  async getById(id: string): Promise<BookEntity> {
    return this.bookRepository.getById(id);
  }


  async deleteById(id: string): Promise<DeleteResult> {
    return this.bookRepository.deleteById(id);
  }

  async getAll(): Promise<BookEntity[]> {
    // const mock = BookEntity.mock();
    return await this.bookRepository.getAll();
  }

  getAllGenres(): BookGenres[] {
    return Object.values(BookGenres)
  }
}
