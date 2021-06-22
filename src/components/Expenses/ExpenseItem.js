// import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpensesItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const changeTitleClickHandler = () => {
  //   setTitle("The title was updated!");
  //   console.log(title);
  // };

  const year = props.date.toLocaleString("en-US", {
    year: "numeric",
  });

  const monthDay = props.date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div className=".expense-date__month_day">{monthDay}</div>
        <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount} MDL</div>
      {/* <button onClick={changeTitleClickHandler}>Click!</button> */}
    </Card>
  );
}

export default ExpensesItem;
