import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { UserRepositoryInterface } from "src/domain/repositories/user.repository";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ){}
    findById(userId: number) {
        return this.userRepo.findOne({
            where: {id :userId},
            select:['id','first_name','last_name','stripe_customer_id','phone','email'],
        });
    }

    async findByPhone(phone: string) {
        return await this.userRepo.findOne({
            where: {phone},
            select:['id','first_name','last_name','stripe_customer_id','phone','email'],
        })
    }
}