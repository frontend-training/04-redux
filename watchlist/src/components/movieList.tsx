import * as React from 'react';
import MovieRow from "./movieRow";

const MovieList = (): JSX.Element => (
    <ul id="sortable" className="list-unstyled">
        <MovieRow id={1} name={"Princess Mononoke"} onClick={() => {}}/>
        <MovieRow id={2} name={"My Neighbor Totoro"} onClick={() => {}}/>
    </ul>
);

export default MovieList;