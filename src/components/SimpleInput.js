import { useRef, useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEntredNameTouched] = useState(false);

    const nameInputRef = useRef();

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEntredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName('');
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
                {nameInputIsInvalid && <p className="error-text">Name is not valid</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
