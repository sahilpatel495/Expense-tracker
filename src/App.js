import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      date: new Date(2022, 1, 1),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 400,
      date: new Date(2022, 0, 13),
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
