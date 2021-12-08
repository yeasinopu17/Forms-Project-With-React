import { useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEntredNameTouched] = useState(false);
    
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEntredEmailTouched] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    
    const enteredEmailIsValid = enteredEmail.includes('@');
    const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEntredNameTouched(true);
    };

    const emailInputBlurHandler = (event) => {
        setEntredEmailTouched(true);
    };
    

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEntredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        // reset section
        setEnteredName('');
        setEntredNameTouched(false);
        setEnteredEmail('');
        setEntredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';
    

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && <p className="error-text">Name is not valid</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={emailInputBlurHandler}
                />
                {enteredEmailIsInvalid && <p className="error-text">Please Enter A Valid Email</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
