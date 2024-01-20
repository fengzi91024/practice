import React from 'react';
import Card from "../UI/Card/Card";
import "./Words.css"
import Word from "./Word/Word";
const Words = (props) => {
    const wordList = props.wordData.map(item => <Word key={item.id} eng={item.english} zh={item.chinese}/>)
    return (
        <Card className={"words-shell"}>
          <Card className={"words"}>
              {
                  wordList
              }
          </Card>
        </Card>
    );
};

export default Words;