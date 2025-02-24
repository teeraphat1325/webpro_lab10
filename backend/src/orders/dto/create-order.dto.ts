import { ApiProperty } from "@nestjs/swagger";
import { OrderItem } from "../entities/orderItem.entity";

export class OrderItemDto {
    @ApiProperty()
    productId: number;
    @ApiProperty()
    qty: number;
}
export class CreateOrderDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    orderItems: OrderItemDto[];
}
