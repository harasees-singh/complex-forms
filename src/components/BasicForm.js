import { useRef } from 'react'
import SimpleInput from "./SimpleInput";
const BasicForm = (props) => {
	const nameIsValid = (name) => name.trim() !== '';
	const emailIsValid = (email) => email.includes('@');
	const nameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();

	const submitHandler = async (event) => {
		event.preventDefault();
		console.log(nameRef);
		nameRef.current.blurNameHandler();
		lastNameRef.current.blurNameHandler();
		emailRef.current.blurNameHandler();

		function delay(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		}

		await delay(10);

		if(nameRef.current.nameInputIsNotValid || lastNameRef.current.nameInputIsNotValid || emailRef.current.nameInputIsNotValid){
			console.log('invalid');
			return;
		}

		console.log('clicked on submit', nameRef.current);
		console.log('submitted');

		nameRef.current.resetNameHandler();
		lastNameRef.current.resetNameHandler();
		emailRef.current.resetNameHandler();
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<SimpleInput isValid={nameIsValid} title='Name' id='name' type='text' ref={nameRef} />
				<SimpleInput isValid={nameIsValid} title='Last Name' id='name' type='text' ref={lastNameRef} />
			</div>
			<SimpleInput isValid={emailIsValid} title='Email' id='email' type='email' ref={emailRef} />
			<div className='form-actions'>
				<button >Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
