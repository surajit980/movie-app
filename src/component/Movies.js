import MovieCart from "./MovieCart";
// import {data} from "./data"

const Movies =(props)=>{
    return(
        props.data.map((movie)=>{
           return(
            <MovieCart movie={movie} key={movie.id}/>
           )
        })
    )
}
export default Movies;