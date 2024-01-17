import React from 'react';
import "./LogFilter.css"
const LogFilter = (props) => {

    const changeHandler = e =>{
        props.onYearChange(+e.target.value);
    }

    return (
        <div>
            年份：<select value={props.year} onChange={changeHandler}>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
        </select>
        </div>
    );
};

export default LogFilter;