import React from 'react';
import "./LogFilter.css"


const LogFilter = (props) => {


    const changeHandler = e => {
        props.onYearChange(+e.target.value);
    }
    console.log(props.option)
    let optionList = props.option.map(item => <option>{item}</option>)

    return (
        <div className={'filter-bar'}>
            <label htmlFor={'filter'}>
                {props.labelContent}:
            </label>
            <select value={props.time} onChange={changeHandler} id={'filter'}>
                {optionList}
            </select>
        </div>
    );
};

export default LogFilter;