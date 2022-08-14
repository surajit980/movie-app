import MovieCart from "./MovieCart";
import {data} from "./data"

const Movies =()=>{
    return(
        data.map((movie)=>{
           return(
            <MovieCart movie={movie}/>
           )
        })
    )
}
export default Movies;