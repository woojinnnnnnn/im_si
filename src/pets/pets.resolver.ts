import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from 'src/entities/pets.entities';

@Resolver()
export class PetsResolver {
    constructor(private readonly petsService: PetsService) {}

    @Query((returns) => [Pets])
    async pets(): Promise<Pets[]> {
        return this.petsService.findAll();
    }
}
