import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2022, 2, 1),
  },
  {
    id: "e2",
    title: "home Insurance",
    amount: 200,
    date: new Date(2023, 1, 25),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 400,
    date: new Date(2023, 0, 13),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
