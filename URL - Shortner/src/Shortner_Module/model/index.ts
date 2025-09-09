import {Entity,Column,PrimaryGeneratedColumn} from "../../../node_modules/typeorm/index.js";
@Entity()
export default class Shortner{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    originalUrl!:string;

    @Column()
    shortCode!:string;

    @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt!:Date;
}