import { BaseEntity } from '@/infrastructure/entities/base.entity';
export declare class OrderEntity extends BaseEntity {
    constructor(input?: Partial<OrderEntity>);
    quantity: number;
    static mock(defaults?: Partial<OrderEntity>): OrderEntity;
}
