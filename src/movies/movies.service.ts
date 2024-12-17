import { Injectable } from '@nestjs/common';
import { Movies } from 'src/entities/movies.entities';

@Injectable()
export class MoviesService {
    async findAll() {
        const movie = new Movies()
        movie.id = 1;
        movie.title = '소방관'
        movie.city = '서울'
        movie.date = '2024-12-10'

        return movie
    }
}
