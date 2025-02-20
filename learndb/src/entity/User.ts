import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Role } from './Role';
import { Order } from './Order';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
  // roles: ('admin' | 'user')[];

  @Column()
  gender: 'male' | 'female';
  age: number;

  @CreateDateColumn()
  created : Date

  @UpdateDateColumn()
  updated : Date

  @ManyToMany(() => Role, (role) => role.users, {cascade: true})
  @JoinTable()
  roles: Role[]

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[]
}
