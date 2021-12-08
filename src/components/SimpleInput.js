import { useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEntredNameTouched] = useState(false);
    // const [formIsValid, setFormIsValid] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = false;
    if (enteredNameIsValid) {
        formIsValid = true;
    }

    // useEffect(() => {
    //     if (enteredNameIsValid) {
    //         setFormIsValid(true);
    //     } else {
    //         setFormIsValid(false);
    //     }
    // }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEntredNameTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEntredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        setEnteredName('');
        setEntredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

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
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
