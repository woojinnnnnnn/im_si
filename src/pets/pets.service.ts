import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pets } from 'src/entities/pets.entities';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pets) 
        private readonly petsRepository: Repository<Pets>,
    ) {}

    async findAll(): Promise<Pets[]> {
        return this.petsRepository.find();
    }
}
