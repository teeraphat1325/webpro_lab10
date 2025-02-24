import { Order } from 'src/orders/entities/order.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @ManyToMany(() => Role, (role) => role.users, { cascade: true })
  @JoinTable()
  roles: Role[]

  @Column()
  gender: 'male' | 'female';
  age: number;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
