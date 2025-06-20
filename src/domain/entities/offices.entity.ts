import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Region } from './region.entity';
import { Property } from './property.entity';
import { OfficeType } from '../enums/office-type.enum';
import { PaymentMethod } from '../enums/payment-method.enum';





@Entity('offices')
export class Office {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 500 })
  logo: string;

  @Column({
    type: 'enum',
    enum: OfficeType,
  })
  type: OfficeType;

  @Column({
    type: 'decimal',
    nullable:true
  })
  commission: number;

  @Column({
    type: 'int',
  })
  booking_period: number;

  @Column({
    type: 'decimal',
    nullable:true
  })
  deposit_per_m2: number;

  @Column({
    type:'decimal',
    nullable:true,
  })
  tourism_deposit_percentage: number;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    default: PaymentMethod.CASH,
  })
  payment_method: PaymentMethod;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'boolean', default: false })
  is_deleted: boolean;

  @Column({type:'text'})
  opening_time: string;

  @Column({type:'text'})
  closing_time: string;

  @Column({
    type: 'decimal',
    default: 0,
  })
  profits: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => User, (user) => user.office)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Region, region => region.offices, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'region_id' }) 
  region: Region;

  @OneToMany(() => Property, (property) => property.office)
  properties: Property[];
}