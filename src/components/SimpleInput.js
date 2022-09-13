import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
	const nameIsValid = (name) => name.trim() !== '';
	const {
		blurHandler: blurNameHandler,
		onChange: onNameChange,
		enteredVal: enteredName,
		inputIsNotValid: nameInputIsNotValid,
		reset: resetNameHandler
	} = useInput(nameIsValid);

	const submitHandler = (event) => {
		// setTouch(true);
		blurNameHandler();
		event.preventDefault();
		if (!nameIsValid(enteredName)) {
			return;
		}
		console.log('submitted!');
		resetNameHandler();
	}

	const nameInputClasses = !nameInputIsNotValid ? 'form-control' : 'form-control invalid';
	return (
		<form>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text'
					id='name'
					onChange={onNameChange}
					value={enteredName}
					onBlur={blurNameHandler}
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
