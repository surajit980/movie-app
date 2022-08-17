//add movies action creates
export function addMovies(data){
    return {
        type:"ADD_MOVIES",
        movies:data
    }
}


export function addFavourites(movie){
    return {
        type:"ADD_FAVOURITE",
        movie:movie
    }
}

export function removeFavourites(movie){
    return {
        type:"REMOVE_FAVOURITES",
        movie:movie
    }
}