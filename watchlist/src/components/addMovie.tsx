import * as React from "react";
import {connect} from 'react-redux';
import {Action} from "redux";
import {addMovie} from "../reducer";

interface DispatchProps {
    addMovie: (title: string) => Action
}

const AddTodo = (props: DispatchProps): JSX.Element => (
    <>
        <input id="title-input" type="text" className="form-control add-todo" placeholder="Lord of the Rings, Terminator, etc."/>
        <button
            id="checkAll"
            className="btn btn-success"
            onClick={() => {
                const title = (document.getElementById('title-input') as HTMLInputElement).value;
                props.addMovie(title);
                (document.getElementById('title-input') as HTMLInputElement).value = "";
            }}
        >
            Add Movie
        </button>
    </>
);

const mapDispatchToProps = {
    addMovie
};

export default connect(null, mapDispatchToProps)(AddTodo);