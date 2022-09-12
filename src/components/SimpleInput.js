import { useState } from 'react'
const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [touch, setTouch] = useState(false);

	const onChange = (event) => {
		setEnteredName(event.target.value.trim());

		if(enteredName.trim() !== ''){
			setEnteredNameIsValid(true);
		}
	}
	const submitHandler = (event) => {
		setTouch(true);
		event.preventDefault();
		if (enteredName === '') {
			setEnteredNameIsValid(false);
			return;
		}
		setEnteredName('');
		setEnteredNameIsValid(true);
	}
	const blurHandler = () => {
		// console.log(enteredName.length);
		setTouch(true);
		setEnteredNameIsValid(enteredName.length !== 0);
	}
	const nameInputIsNotValid = !enteredNameIsValid && touch;

	const nameInputClasses = !nameInputIsNotValid ? 'form-control' : 'form-control invalid';
	return (
		<form>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text'
					id='name'
					onChange={onChange}
					value={enteredName}
					onBlur={blurHandler}
				/>
				{nameInputIsNotValid && <p className='error-text'>Name must not be empty</p>}
			</div>
			<div className="form-actions">
				<button onClick={submitHandler}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
