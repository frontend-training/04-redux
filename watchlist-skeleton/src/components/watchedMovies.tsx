import * as React from 'react';
import {Movie} from "./movieRow";

const WatchedMovie = (props: Movie): JSX.Element => (
    <li>{props.name}<button className="remove-item btn btn-default btn-xs pull-right">
        <i onClick={() => props.onClick(props.id)} className="fas fa-times"/></button></li>
);

const WatchedMovies = (): JSX.Element => (
    <div className="col-md-6">
        <div className="todolist">
            <h1>Already Watched</h1>
            <ul id="done-items" className="list-unstyled">
                <WatchedMovie id={1} name={"Porco Rosso"} onClick={() => {}}/>
            </ul>
        </div>
    </div>
);

export default WatchedMovies;