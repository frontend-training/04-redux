import * as React from "react";

const AddMovie = (): JSX.Element => (
    <>
        <input type="text" className="form-control add-todo" placeholder="Lord of the Rings, Terminator, etc."/>
        <button id="checkAll" className="btn btn-success">Add Movie</button>
    </>
);

export default AddMovie;
