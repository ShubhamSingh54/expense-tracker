
import react from 'react';
import './ExpenseDate.css';


function ExpenseDate(props)
{
   /* const month=props.date.toLocaleString('en-US',{month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});*/
    // const date = new Date();
    // console.log(date)
    const formattedDate = props.date.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      // console.log("format of time",formattedDate);
      // console.log("hello world")

    return (
        <div className="expense-date">{formattedDate}</div>);
    
}


export default ExpenseDate;