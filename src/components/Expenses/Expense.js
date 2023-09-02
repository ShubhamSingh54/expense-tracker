
import react from 'react';
import './Expense.css';
import ExpenseItem from "./ExpenseItem";

const Expense=(props)=>{
    return (
        <div className="expense">
{
    props.item.map((expense,index)=>(
        <ExpenseItem 
        key={index}
            date={expense.date} 
            title={expense.title} 
            amount={expense.amount}   
           />

        )

    )
}

    
        </div>

    );


}

export default Expense;