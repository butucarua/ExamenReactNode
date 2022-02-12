import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { CreateBookDto } from '@/domain/shelf/sub-domain/book/dto/create-book.dto';
import { UpdateBookDto } from '@/domain/shelf/sub-domain/book/dto/update-book.dto';
import { BookEntity } from '@/domain/shelf/sub-domain/book/entities/book.entity';
import { Repository, DeleteResult } from 'typeorm';
export declare class BookRepository extends Repository<BookEntity> {
    constructor();
    createBook(dto: CreateBookDto, shelf: ShelfEntity): Promise<BookEntity>;
    updateBook(dto: UpdateBookDto): Promise<BookEntity>;
    getAll(): Promise<BookEntity[]>;
    getByTitle(title: string): Promise<BookEntity>;
    getById(id: string): Promise<BookEntity>;
    deleteById(id: string): Promise<DeleteResult>;
}
