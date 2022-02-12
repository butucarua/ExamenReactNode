import { ShelfRepository } from '@/domain/shelf/shelf.repository';
import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
export declare class ShelfService {
    private shelfRepository;
    constructor(shelfRepository: ShelfRepository);
    findAllshelfs(): Promise<ShelfEntity[]>;
    createOrder(createShelfDto: CreateShelfDto): Promise<ShelfEntity>;
    getById(id: string): Promise<ShelfEntity>;
}
