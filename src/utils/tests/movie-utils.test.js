import { getFullTitle } from '../movie-utils';

describe('movie-utils', () => {
    describe('getFullTitle', () => {
        it('should return the title if no release date', () => {
            const movie = { title: 'The Raid' };
            expect(getFullTitle(movie)).toBe(movie.title);
        });
        it('should return the title with release year if provided', () => {
            const movie = { title: 'The Raid', release_date: '2012-06-20' };
            expect(getFullTitle(movie)).toBe('The Raid (2012)');
        });
    });
});