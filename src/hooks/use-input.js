import { useReducer } from 'react'
const useInput = (isValid) => {
	// const [touch, setTouch] = useState(false);
	const nameReducer = function (prevState, action) {
		if (action.type === false) {
			return { ...prevState, parity: false };
		}
		else if (action.type === true) {
			return { ...prevState, parity: true };
		}
		else {
			// UPDATE_NAME
			return {...prevState, name: action.name}
		}
	}
	const [name, nameDispatch] = useReducer(nameReducer, { parity: false, name: '' });
	const enteredNameIsValid = isValid(name.name);

	const nameInputIsNotValid = !enteredNameIsValid && name.parity;


	const onChange = (event) => {
		nameDispatch({type: 'UPDATE_NAME', name: event.target.value.trim()});
	}

	const reset = () => {
		// setTouch(false);
		nameDispatch({ type: false });
		nameDispatch({type: 'UPDATE_NAME', name: ''})
	}

	const blurHandler = () => {
		// setTouch(true);
		nameDispatch({ type: true });
		// console.log(name.parity);
	}
	return { blurHandler: blurHandler, onChange: onChange, enteredVal: name.name, inputIsNotValid: nameInputIsNotValid, reset: reset };
}
export default useInput;