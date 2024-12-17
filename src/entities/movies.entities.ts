import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movies {
    @Field((type) => Int)
    id: number;

    @Field((type) => String)
    title: string

    @Field((type) => String)
    city: string

    @Field((type) => String)
    date: string
}