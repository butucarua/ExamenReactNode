import { BaseEntity } from '@/infrastructure/entities/base.entity';
import { BookEntity } from '@/domain/shelf/sub-domain/book/entities/book.entity';
export declare class ShelfEntity extends BaseEntity {
    constructor(input?: Partial<ShelfEntity>);
    name: string;
    description: string;
    books: BookEntity[];
}
