import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Groceries",
      amount: 289.99,
      date: new Date(2021, 5, 6),
    },
    {
      id: 2,
      title: "Rent",
      amount: 650,
      date: new Date(2021, 5, 5),
    },
    {
      id: 3,
      title: "Household supplies",
      amount: 89.99,
      date: new Date(2021, 5, 2),
    },
  ];

  return (
    <div>
      <h1 className="appTitle">Reactive Expense Tracker</h1>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
