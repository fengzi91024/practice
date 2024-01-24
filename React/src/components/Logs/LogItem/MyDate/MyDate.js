import React from 'react';
import classes from "./MyDate.module.css"
const MyDate = (props) => {
    const {date} = props
    //获取月份
    const month = date.toLocaleString('zh-Cn',{month:'long'})
    //获取日期
    const day = date.getDate();

    return (
            <div className={classes.logsDate}>
                <div className={classes.month}>
                    {month}
                </div>
                <div className={classes.day}>
                    {day}
                </div>
            </div>
    );
};

export default MyDate;