import react,{useState} from 'react';
import './ExpenseItem.css';
//import'./ExpenseDate';
import ExpenseDate from './ExpenseDate';

const ExpenseItem=(props)=>{
// const month=props.date.toLocaleString('en-US',{month:'long'});
// const year=props.date.getFullYear();
// const day=props.date.toLocaleString('en-US',{day:'2-digit'});
//const [expenseData, setExpenseData] = useState(null);

    return(
        <div className='expense-item'>
           <div className="datearrange">
              
     <ExpenseDate date={new Date(props.date)} />
       
            </div>
            <div className='expense-item__description'> 
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
           
        </div>

    );


}


export default ExpenseItem;