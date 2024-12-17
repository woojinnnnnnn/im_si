import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Pets {
    @PrimaryGeneratedColumn({ type: 'int' })
    @Field((type) => Int)
    id: number

    @Column({ type: 'varchar' })
    @Field()
    name: string

    @Column({ type: 'varchar', nullable: true })
    @Field({ nullable: true})
    kind?: string
}