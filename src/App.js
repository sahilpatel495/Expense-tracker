import ExpenseItem from "./Components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
