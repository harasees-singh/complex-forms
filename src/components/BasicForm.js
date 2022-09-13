import { useRef } from 'react'
import SimpleInput from "./SimpleInput";
const BasicForm = (props) => {
	const nameIsValid = (name) => name.trim() !== '';
	const emailIsValid = (email) => email.includes('@');
	const nameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(nameRef);
		nameRef.current.blurNameHandler();
		lastNameRef.current.blurNameHandler();
		emailRef.current.blurNameHandler();
		
		console.log('clicked on submit', nameRef.current);
		console.log('submitted');
	}

	return (
		<form>
			<div className='control-group'>
				<SimpleInput isValid={nameIsValid} title='Name' id='name' type='text' ref={nameRef} />
				<SimpleInput isValid={nameIsValid} title='Last Name' id='name' type='text' ref={lastNameRef} />
			</div>
			<SimpleInput isValid={emailIsValid} title='Email' id='email' type='email' ref={emailRef} />
			<div className='form-actions'>
				<button onClick={submitHandler}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
