import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  let expensesData = [];
  for (const [index, value] of props.items.entries()) {
    expensesData.push(
      <ExpenseItem
        key={index}
        title={value.title}
        date={value.date}
        amount={value.amount}
      />
    );
  }

  return (
    <div>
      <Card className="expenses">
        <h2>Expenses:</h2>
        {expensesData}
      </Card>
    </div>
  );
}

export default Expenses;
