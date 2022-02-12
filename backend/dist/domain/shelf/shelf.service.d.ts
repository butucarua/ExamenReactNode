import { ShelfRepository } from '@/domain/shelf/shelf.repository';
import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { UpdateShelfDto } from '@/domain/shelf/dto/update-shelf.dto';
import { GetShelfById } from '@/domain/shelf/dto/get-shelf-by-id';
import { GetShelfByName } from '@/domain/shelf/dto/get-shelf-by-name';
export declare class ShelfService {
    private shelfRepository;
    constructor(shelfRepository: ShelfRepository);
    createShelf(createShelfDto: CreateShelfDto): Promise<ShelfEntity>;
    updateShelf(updateShelf: UpdateShelfDto): Promise<ShelfEntity>;
    getById(getById: GetShelfById): Promise<ShelfEntity>;
    getByName(getByName: GetShelfByName): Promise<ShelfEntity[]>;
    getByDescription(description: string): Promise<ShelfEntity>;
    deleteById(id: string): Promise<boolean>;
    getAll(): Promise<ShelfEntity[]>;
}
