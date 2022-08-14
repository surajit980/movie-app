function MovieCart(props){
    return(
        <div className="movie-cart">
            <div className="cart-img">
                <img src={props.movie.Poster} alt=""/>
            </div>
            <div className="cart-details">
                <h3 className="movie-title">{props.movie.Title}</h3>
                <p className="movie-dec">{props.movie.Plot}</p>
                <h5 className="movie-gen">Genre : {props.movie.Genre}</h5>
                <div className="cart-bottom">
                    <span><img className="star-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt=""/>{props.movie.imdbRating}</span>
                    <button className="fav-btn">Favourite</button>
                </div>
            </div>
        </div>
    )
}
export default MovieCart;