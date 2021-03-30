import React from 'react';
import Option from './Option';

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup OnCllick to fire the method

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
                ))
            }
        </div>
    )
}

export default Options;