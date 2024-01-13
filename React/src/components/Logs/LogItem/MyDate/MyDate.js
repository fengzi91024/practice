import React from 'react';
import "./MyDate.css"
const MyDate = (props) => {
    //获取月份
    const month = props.date.toLocaleString('zh-Cn',{month:'long'})
    //获取日期
    const date = props.date.getDate();

    return (
            <div className="logs-date">
                <div className="month">
                    {month}
                </div>
                <div className="day">
                    {date}
                </div>
            </div>
    );
};

export default MyDate;