import { OrderEntity } from '@/domain/order/entities/order.entity';
import { OrdersRepository } from '@/domain/order/order.repository';
import { CreateOrderDto } from '@/domain/order/dto/create-order.dto';
export declare class OrderService {
    private ordersRepository;
    constructor(ordersRepository: OrdersRepository);
    findAllOrders(): Promise<OrderEntity[]>;
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
    getById(id: string): Promise<OrderEntity>;
}
