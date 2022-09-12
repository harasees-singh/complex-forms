import { useState } from 'react'
const useInput = () => {
    const [inputIsValid, setInputIsValid] = useState(false);
    const [touch, setTouch] = useState(false);
    const [inputIsNotValid, setInputIsNotValid] = useState(null);

    const onChange = (event) => {
        setTouch(true);
        setInputIsValid(event.target.value.trim().length !== 0);
        setInputIsNotValid(event.target.value.trim().length === 0);
    }
    const onBlur = () => {
        // console.log('blur')
        // inputIsNotValid = !(inputIsValid);
        setInputIsNotValid(!inputIsValid);
    }
    return [inputIsNotValid, onChange, onBlur, setInputIsNotValid, setTouch, inputIsValid];
}
export default useInput;