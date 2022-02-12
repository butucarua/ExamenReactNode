import { Repository } from 'typeorm';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
export declare class ShelfRepository extends Repository<ShelfEntity> {
    constructor();
    getAllOrders(): Promise<ShelfEntity[]>;
    getByDescription(description: string): Promise<ShelfEntity>;
    getById(id: string): Promise<ShelfEntity>;
    createOrder(dto: CreateShelfDto): Promise<ShelfEntity>;
}
