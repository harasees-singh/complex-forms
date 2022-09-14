import useInput from '../hooks/use-input';
import { forwardRef, useImperativeHandle } from 'react';
const SimpleInput = forwardRef((props, ref) => {
	
	const nameIsValid = props.isValid;
	const {
		blurHandler: blurNameHandler,
		onChange: onNameChange,
		enteredVal: enteredName,
		inputIsNotValid: nameInputIsNotValid,
		reset: resetNameHandler
	} = useInput(nameIsValid);
	
	const nameInputClasses = !nameInputIsNotValid ? 'form-control' : 'form-control invalid';
	
	useImperativeHandle(ref, () => {
		return {
			resetNameHandler,
			nameInputIsNotValid,
			blurNameHandler
		}
	}, [nameInputIsNotValid, blurNameHandler, resetNameHandler])
	return (
		<div className={nameInputClasses}>
			<label htmlFor={props.id}>Your {props.title}</label>
			<input type={props.type}
				id={props.id}
				onChange={onNameChange}
				value={enteredName}
				onBlur={blurNameHandler}
			/>
			{nameInputIsNotValid && <p className='error-text'>Name must not be empty</p>}
		</div>
	);
});

export default SimpleInput;
