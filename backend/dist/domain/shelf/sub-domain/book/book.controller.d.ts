import { BookService } from '@/domain/shelf/sub-domain/book/book.service';
import { CreateBookDto } from '@/domain/shelf/sub-domain/book/dto/create-book.dto';
import { BookEntity, BookGenres } from '@/domain/shelf/sub-domain/book/entities/book.entity';
import { UpdateBookDto } from '@/domain/shelf/sub-domain/book/dto/update-book.dto';
import { DeleteResult } from 'typeorm';
import { ShelfService } from '@/domain/shelf/shelf.service';
export declare class BookController {
    private readonly bookService;
    private readonly shelfService;
    constructor(bookService: BookService, shelfService: ShelfService);
    createBook(createBookDto: CreateBookDto): Promise<BookEntity>;
    updateBook(updateBookDto: UpdateBookDto): Promise<BookEntity>;
    getBookById(id: string): Promise<BookEntity>;
    getAllBooks(): Promise<BookEntity[]>;
    deleteBookById(id: string): Promise<DeleteResult>;
    getAllGenres(): BookGenres[];
}
