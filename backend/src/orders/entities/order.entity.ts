import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, ManyToOne, DeleteDateColumn } from "typeorm"
import { OrderItem } from "./orderItem.entity"
import { User } from "src/users/entities/user.entity"


@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    total: number

    @Column()
    qty: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItems: OrderItem[]

    @ManyToOne(() => User, (user) => user.orders)
    user: User;
}
