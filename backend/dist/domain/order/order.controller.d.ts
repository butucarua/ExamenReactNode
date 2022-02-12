import { OrderService } from '@/domain/order/order.service';
import { OrderEntity } from '@/domain/order/entities/order.entity';
import { CreateOrderDto } from '@/domain/order/dto/create-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrder(id: string): Promise<OrderEntity>;
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity>;
}
