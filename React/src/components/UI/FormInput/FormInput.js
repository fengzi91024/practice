import React, {useState} from 'react';
import classes from "./FormInput.css";

const FormInput = ({label,type}) => {
    const [input,setInput] =useState("")
    const changeHandler = (e)=>{
        setInput(e.target.value)
    }
    return (
        <div>
            <label htmlFor={"formInput"}>{label}</label>
            <input id={"formInput"} onChange={changeHandler} value={input} type={type} />
        </div>
    );
};

export default FormInput;