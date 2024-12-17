import { Resolver, Query } from '@nestjs/graphql';
import { Movies } from 'src/entities/movies.entities';
import { MoviesService } from './movies.service';

@Resolver()
export class MoviesResolver {
    constructor(private readonly moviesService: MoviesService) {}

    @Query(() => Movies) 
    async movies(): Promise<Movies> {
        return this.moviesService.findAll();
    }
}
