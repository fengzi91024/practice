import React from 'react';
import "./LogFilter.css"


const LogFilter = (props) => {


    const changeHandler = e => {
        props.onSelectChange(e.target.value);
    }

    let optionList = props.option.map((item,index) => <option key={index}>{item}</option>)

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