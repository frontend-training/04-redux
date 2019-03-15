import * as React from 'react';
import {connect} from 'react-redux';
import {Movie, State} from "../reducer";

interface WatchedMovieProps {
    name: string,
    id: number,
    onClick: (index: number) => void
}

const WatchedMovie = (props: WatchedMovieProps): JSX.Element => (
    <li>{props.name}<button className="remove-item btn btn-default btn-xs pull-right">
        <i onClick={() => props.onClick(props.id)} className="fas fa-times"/></button></li>
);

interface Props {
    watchedMovies: Movie[]
}

const WatchedMovies = (props: Props): JSX.Element => (
    <div className="col-md-6">
        <div className="todolist">
            <h1>Already Watched</h1>
            <ul id="done-items" className="list-unstyled">
                {props.watchedMovies.length === 0 && <h3>You haven't seen anything!</h3>}
                {props.watchedMovies.map((movie: Movie, index: number) => (
                    <WatchedMovie
                        id={1}
                        key={index}
                        name={movie.name}
                        onClick={() => {}}
                    />
                ))}
            </ul>
        </div>
    </div>
);

const mapStateToProps = (state: State): Props => ({
    watchedMovies: state.movies.filter((movie: Movie) => movie.watched)
});

export default connect(mapStateToProps)(WatchedMovies);