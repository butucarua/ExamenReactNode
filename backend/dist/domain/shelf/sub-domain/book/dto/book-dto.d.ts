/// <reference types="jest" />
import { OrderEntity } from '@/domain/order/entities/order.entity';
export declare class OrderDto implements Readonly<OrderEntity> {
    id: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    static from(dto: Partial<OrderEntity>): OrderDto;
    static fromEntity(entity: OrderEntity): OrderDto;
    toEntity(): jest.It;
}
