import { Repository } from 'typeorm';
import { OrderEntity } from '@/domain/order/entities/order.entity';
import { CreateOrderDto } from '@/domain/order/dto/create-order.dto';
export declare class OrdersRepository extends Repository<OrderEntity> {
    constructor();
    getAllOrders(): Promise<OrderEntity[]>;
    getByQuantity(quantity: number): Promise<OrderEntity>;
    getById(id: string): Promise<OrderEntity>;
    createOrder(dto: CreateOrderDto): Promise<OrderEntity>;
}
