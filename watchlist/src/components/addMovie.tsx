import * as React from "react";

const AddTodo = (): JSX.Element => (
    <>
        <input type="text" className="form-control add-todo" placeholder="Add movie"/>
        <button id="checkAll" className="btn btn-success">Mark all as watched</button>
    </>
);

export default AddTodo;