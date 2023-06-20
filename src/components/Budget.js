import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        if(event.target.value <= 20000){
            const newBudget = event.target.value;
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }else{
            alert("The value cannot exceed budget funds £20000");
        }

    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
            required='required'
            type='number'
            id='budget'
            step='10'
            value={budget}
            style={{ marginLeft: '0.5rem' , size: 10}}
            onChange={handleBudgetChange}
            />
        </div>
    );
};
export default Budget;