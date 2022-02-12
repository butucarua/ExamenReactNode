import { BaseEntity } from '@/infrastructure/entities/base.entity';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
export declare enum BookGenres {
    ACTION = "action",
    ADVENTURE = "adventure",
    CLASSICS = "classics",
    COMIC = "comic",
    DETECTIVE = "detective",
    FANTASY = "fantasy",
    FICTION = "fiction",
    HORROR = "horror",
    ROMANCE = "romance",
    SF = "sf",
    HISTORY = "history",
    CRIME = "crime",
    SUSPENSE = "suspense"
}
export declare class BookEntity extends BaseEntity {
    constructor(input?: Partial<BookEntity>);
    title: string;
    genre: BookGenres;
    shelf: ShelfEntity;
}
