import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { ShelfService } from '@/domain/shelf/shelf.service';
import { UpdateShelfDto } from '@/domain/shelf/dto/update-shelf.dto';
import { GetShelfById } from '@/domain/shelf/dto/get-shelf-by-id';
import { GetShelfByName } from '@/domain/shelf/dto/get-shelf-by-name';
import { DeleteShelfById } from '@/domain/shelf/dto/delete-shelf-by-id';
export declare class ShelfController {
    private readonly shelfService;
    constructor(shelfService: ShelfService);
    createShelf(createShelf: CreateShelfDto): Promise<ShelfEntity>;
    updateShelf(updateShelf: UpdateShelfDto): Promise<ShelfEntity>;
    getShelfById(getById: GetShelfById): Promise<ShelfEntity>;
    getShelfByName(getByName: GetShelfByName): Promise<ShelfEntity[]>;
    deleteShelfById(deleteById: DeleteShelfById): Promise<boolean>;
}
