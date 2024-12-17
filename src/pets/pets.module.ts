import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from 'src/entities/pets.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Pets])],
  providers: [PetsService, PetsResolver]
})
export class PetsModule {}
