import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <select
              onChange={handleCurrencyChange}
              value='Currency'>
                    <option defaultValue={currency} hidden>Currency ({currency})</option>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
            </select>
            </div>
    );
};


export default Currency;
