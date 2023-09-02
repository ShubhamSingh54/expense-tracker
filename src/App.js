//import logo from './logo.svg';
//import './App.css';
import react,{useState} from 'react';
import Expense from "./components/Expenses/Expense";
import NewExpense from './components/Expenses/NewExpense/NewExpense';


let DuMMY_EXPENSE=[
  {
    id:'e1',
    date :new Date(2021,10,5),
    title:"Books",
    amount:1000
  },
  {
    id:'e2',
    date :new Date(2021,10,5),
    title:"House Rent",
    amount:5000
  },
   {
    id:'e3',
    date :new Date(2021,7,12),
    title:"School Fee",
    amount:4000
  },
   {
    id:'e4',
    date :new Date(2021,5,4),
    title:"Library Fee",
    amount:5010
  }
];
function App() {
  const [expenses,setExpenses]=useState(DuMMY_EXPENSE);

const addExpenseHandler=(expense)=>{
  const updatedExpense=[expense,...expenses];
setExpenses(updatedExpense);
};


  return (
    /*<div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
<Expense item={expenses}/>
    
    </div>
  );
}

export default App;
