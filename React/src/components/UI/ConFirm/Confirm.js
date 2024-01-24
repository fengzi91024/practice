import React from 'react';
import Card from "../Card/Card";
import Backdrop from "../BackDrop/Backdrop";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
    return <Backdrop>
        <Card className={classes.confirmBar}>
            <div className={classes.confirmDesc}>
                <p>{props.content}</p>
            </div>
            <div className={classes.confirmBtn}>
                <button className={classes.ok} onClick={props.onOK}>确认</button>
                <button className={classes.cancel} onClick={props.onCancel}>取消</button>
            </div>
        </Card>
    </Backdrop>


};

export default Confirm;