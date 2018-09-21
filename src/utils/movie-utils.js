export const getFullTitle = (movie) => {
    if (!movie.release_date) {
        return movie.title;
    }

    const releaseDate = new Date(movie.release_date);
    return `${movie.title} (${releaseDate.getFullYear()})`;
}