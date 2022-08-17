const initialState={
    list:[],
    favourites:[]
}

export default function movies(state=initialState,action) {
    // if (action.type==="ADD_MOVIES") {
    //     return {
    //         ...initialState,
    //         list:action.movies
    //     }
    // }
    // return state;


    switch (action.type) {
        case "ADD_MOVIES":
            return {
                ...state,
                list:action.movies
            }
        case "ADD_FAVOURITE":
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case "REMOVE_FAVOURITES":
            const filterArray=state.favourites.filter((movie)=>
                movie.id !== action.movie.id
            )
            return{
                ...state,
                favourites:filterArray
            }
        default:
            return state;
    }
}