import { BookGenres } from "@/domain/shelf/sub-domain/book/entities/book.entity";
export declare class CreateBookDto {
    genre: BookGenres;
    title: string;
    shelfId: string;
}
