import { Repository } from 'typeorm';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { UpdateShelfDto } from '@/domain/shelf/dto/update-shelf.dto';
export declare class ShelfRepository extends Repository<ShelfEntity> {
    constructor();
    createShelf(dto: CreateShelfDto): Promise<ShelfEntity>;
    updateShelf(dto: UpdateShelfDto): Promise<ShelfEntity>;
    getAll(): Promise<ShelfEntity[]>;
    getByDescription(description: string): Promise<ShelfEntity>;
    getByNameLike(name: string): Promise<ShelfEntity[]>;
    getById(id: string): Promise<ShelfEntity>;
    getByName(name: string): Promise<ShelfEntity>;
    deleteById(id: string): Promise<boolean>;
}
