import { useState } from 'react'
const useInput = (isValid) => {
	const [enteredName, setEnteredName] = useState('');
	const [touch, setTouch] = useState(false);
	// const [formIsValid, setFormIsValid] = useState(false);

	const enteredNameIsValid = isValid(enteredName);
	const nameInputIsNotValid = !enteredNameIsValid && touch;


	const onChange = (event) => {
		setEnteredName(event.target.value.trim());
	}

	const reset = () => {
		setTouch(false);
		setEnteredName('');
	}

	const blurHandler = () => {
		// console.log(enteredName.length);
		console.log('blurred');
		setTouch(true);
		console.log(touch);
	}
	return { blurHandler: blurHandler, onChange: onChange, enteredVal: enteredName, inputIsNotValid: nameInputIsNotValid, reset: reset };
}
export default useInput;