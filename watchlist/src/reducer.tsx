export interface Movie {
    name: string,
    watched: boolean,
}

export interface State {
    movies: Movie[]
}

interface Action {
    type: string,

    [propName: string]: any;
}

export const reducer = (state: State = {movies: []}, action: Action): State => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                movies: [...state.movies, {watched: false, name: action.name}]
            };
        case 'TOGGLE_WATCHED':
            state.movies[action.index].watched = !state.movies[action.index].watched;
            return {
                movies: [...state.movies]
            }
    }
    return {movies: []};
};

export const addMovie = (title: string): Action => (
    {
        type: 'ADD_MOVIE',
        name: title
    }
);

export const toggleMovieAsWatched = (id: number): Action => (
    {
        type: 'TOGGLE_WATCHED',
        index: id
    }
);