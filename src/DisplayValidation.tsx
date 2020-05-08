import React from 'react'

interface Props {
    status: string;
    reason: string;
    displayReason: boolean;
}

const DisplayValidationResponse: React.FC<Props> = (props) => {
    return (
        <div>
            {props.status === 'valid' ?
            <p className="validation valid">Valid!</p>
            :<p className="validation invalid">Invalid</p>}
            {props.displayReason ?
            props.reason
            : null}
        </div>
    )
}

export default DisplayValidationResponse