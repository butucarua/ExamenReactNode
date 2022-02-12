import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { ShelfService } from '@/domain/shelf/shelf.service';
export declare class ShelfController {
    private readonly shelfService;
    constructor(shelfService: ShelfService);
    getShelf(id: string): Promise<ShelfEntity>;
    createShelf(CreateShelfDto: CreateShelfDto): Promise<ShelfEntity>;
}
