export const sortMovieGenres = (allGenres, movieGenre) => {
    let genreNames = [];
    for(let genre of allGenres) {
        if(movieGenre.includes(genre.id)) genreNames.push(genre.name);
    }

    return genreNames;
}