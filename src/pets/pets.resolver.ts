import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from 'src/entities/pets.entities';
import { PetsInput } from './pets.input'; // dto 느낌

@Resolver((of) => Pets)
export class PetsResolver {
    constructor(private readonly petsService: PetsService) {}

    @Query(() => [Pets])
    async pets(): Promise<Pets[]> {
        return this.petsService.findAll();
    }

    @Mutation(() => Pets)
    async create(@Args('petInput') petsInput: PetsInput): Promise<Pets> {
    return this.petsService.create(petsInput);
  }

}

/// 일단 뮤타시온 ? 저놈이 안되고 있네 공문 다시 정독 ㄱ