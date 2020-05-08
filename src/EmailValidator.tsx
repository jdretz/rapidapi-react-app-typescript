import React from 'react'
import axios from 'axios'
import DisplayValidationResponse from './DisplayValidation'

const EmailValidator: React.FC = () => {
    let [email, setEmail] = React.useState<string>('')
    let [emailStatus, setEmailStatus] = React.useState<string>('')
    let [validationReason, setValidationReason] = React.useState<string>('')
    let [showReason, setShowReason] = React.useState<string>('Yes')

    const validateEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        axios({
            "method": "GET",
            "url": "https://email-checker.p.rapidapi.com/verify/v1",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "email-checker.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
            }, "params": {
                "email": encodeURI(email)
            }
        })
        .then(({data}) => {
            setEmailStatus(data.status)
            setValidationReason(data.reason)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <form onSubmit={validateEmail}>
                <legend></legend>
                <fieldset>
                    <label>Email to Validate: </label>
                    <input
                        type='text'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <p>Display the reason for validation classification?</p>
                        <input
                            type="radio"
                            id="yes-show"
                            name="reason"
                            value='Yes'
                            onChange={(e) => setShowReason(e.target.value)}
                            />
                        <label htmlFor="yes-show">Yes</label><br />
                        <input
                            type="radio"
                            id="no-show"
                            name="reason"
                            value='No'
                            onChange={(e) => setShowReason(e.target.value)}
                            />
                        <label htmlFor="no-show">No</label><br />
                    </div>
                    <button type='submit'>Validate</button>
                </fieldset>
            </form>
            {emailStatus &&
            <DisplayValidationResponse
                status={emailStatus}
                reason={validationReason}
                displayReason={showReason === 'Yes' ? true : false}
                />}
        </div>
    )
}

export default EmailValidator