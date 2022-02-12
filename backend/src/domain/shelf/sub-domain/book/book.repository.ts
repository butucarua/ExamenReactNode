// Nest dependencies
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { CreateBookDto } from '@/domain/shelf/sub-domain/book/dto/create-book.dto';
import { UpdateBookDto } from '@/domain/shelf/sub-domain/book/dto/update-book.dto';
import { BookEntity } from '@/domain/shelf/sub-domain/book/entities/book.entity';
import { UnprocessableEntityException, NotFoundException, Injectable } from '@nestjs/common'

// Other dependencies
import { Repository, EntityRepository, DeleteResult } from 'typeorm'

@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity> {
    constructor() {
      super()
    }

    async createBook(dto: CreateBookDto, shelf: ShelfEntity): Promise<BookEntity> {
        const newBook: BookEntity = new BookEntity()
        newBook.title = dto.title;
        newBook.genre = dto.genre;
        newBook.shelf = shelf;

        try {
            const created = await this.save(newBook)
            return created;
        } catch (error) {
            throw new UnprocessableEntityException(error.errmsg)
        }
    }

    async updateBook(dto: UpdateBookDto): Promise<BookEntity> {
        const newBook: BookEntity = new BookEntity()
        newBook.title = dto.title;

        try {
            const created = await this.save(newBook)
            return created;
        } catch (error) {
            throw new UnprocessableEntityException(error.errmsg)
        }
    }

    async getAll(): Promise<BookEntity[]> {
        try {
            const books: BookEntity[] = await this.find({ relations: ['shelf']})
            return books;
        } catch (err) {
            throw new NotFoundException('No books could be found')
        }
    }

    async getByTitle(title: string): Promise<BookEntity> {
        try {
            const book: BookEntity = await this.findOneOrFail({ title })
            return book
        } catch (err) {
            throw new NotFoundException('Book could not be found by given description')
        }
    }

    async getById(id: string): Promise<BookEntity> {
        try {
            return await this.findOneOrFail({ id })
        } catch (err) {
            throw new NotFoundException('Book could not be found by given id')
        }
    }


    async deleteById(id: string): Promise<DeleteResult> {
        try {
            return await this.delete({ id })
        } catch (err) {
            throw new NotFoundException('Book could not be deleted by given id')
        }
    }
   
}