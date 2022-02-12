import { BaseEntity } from '@/infrastructure/entities/base.entity';
export declare class ShelfEntity extends BaseEntity {
    constructor(input?: Partial<ShelfEntity>);
    description: string;
    static mock(defaults?: Partial<ShelfEntity>): ShelfEntity;
}
