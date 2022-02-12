import { ShelfEntity } from "@/domain/shelf/entities/shelf.entity";
import { BookRepository } from "@/domain/shelf/sub-domain/book/book.repository";
import { CreateBookDto } from "@/domain/shelf/sub-domain/book/dto/create-book.dto";
import { UpdateBookDto } from "@/domain/shelf/sub-domain/book/dto/update-book.dto";
import { BookEntity, BookGenres } from "@/domain/shelf/sub-domain/book/entities/book.entity";
import { DeleteResult } from "typeorm";
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: BookRepository);
    createBook(createbookDto: CreateBookDto, shelf: ShelfEntity): Promise<BookEntity>;
    updateBook(updateBook: UpdateBookDto): Promise<BookEntity>;
    getById(id: string): Promise<BookEntity>;
    deleteById(id: string): Promise<DeleteResult>;
    getAll(): Promise<BookEntity[]>;
    getAllGenres(): BookGenres[];
}
