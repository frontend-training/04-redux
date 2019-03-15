import * as React from 'react';
import {connect} from 'react-redux';
import {Movie, State} from "../reducer";

interface Props {
    count: number
}

const Counter = (props: Props): JSX.Element => (
    <div className="todo-footer">
        <strong><span className="count-todos"/></strong> {props.count} left
    </div>
);

const mapStateToProps = (state: State): Props => ({
    count: state.movies.filter((movie: Movie) => !movie.watched).length
});

export default connect(mapStateToProps)(Counter);