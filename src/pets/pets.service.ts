import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pets } from 'src/entities/pets.entities';
import { Repository } from 'typeorm';
import { PetsInput } from './pets.input';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pets) 
        private readonly petsRepository: Repository<Pets>,
    ) {}

    async findAll(): Promise<Pets[]> {
        return this.petsRepository.find();
    }

    async create(petInput: PetsInput): Promise<Pets> {
        const newPet = this.petsRepository.create(petInput);
        return this.petsRepository.save(newPet);
    }
}
