import * as React from 'react';

interface Props {
    name: string,
    watched: boolean,
    id: number,
    onClick: (index: number) => void
}

const MovieRow = (props:Props): JSX.Element => (
    <li className="ui-state-default">
        <div className="checkbox">
            <label>
                <input
                    checked={props.watched}
                    type="checkbox"
                    onChange={() => props.onClick(props.id)} value=""
                />
                {props.name}
            </label>
        </div>
    </li>
);

export default MovieRow;