import * as React from 'react';

export interface Movie {
    id: number,
    name: string,
    onClick: (number: number) => void
}
const MovieRow = (props:Movie): JSX.Element => (
    <li className="ui-state-default">
        <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    onClick={() => props.onClick(props.id)} value=""
                />
                {props.name}
            </label>
        </div>
    </li>
);

export default MovieRow;