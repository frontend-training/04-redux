import * as React from 'react';
import {connect} from 'react-redux';
import {toggleMovieAsWatched, Movie, State} from "../reducer";
import MovieRow from "./movieRow";

interface StateProps {
    movies: Movie[]
}

interface DispatchProps {
    toggleMovieAsWatched: (index: number) => void
}

type Props = StateProps & DispatchProps

const MovieList = (props: Props): JSX.Element => (
    <ul id="sortable" className="list-unstyled">
        {props.movies.map((movie: Movie, index: number) => (
            <MovieRow
                id={1}
                watched={movie.watched}
                key={index}
                name={movie.name}
                onClick={() => props.toggleMovieAsWatched(index)}/>
        ))}
    </ul>
);

const mapStateToProps = (state: State): StateProps => ({
    movies: state.movies
});

const dispatchToProps = {
    toggleMovieAsWatched
};

export default connect(mapStateToProps, dispatchToProps)(MovieList);