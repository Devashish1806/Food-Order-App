import { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const countHandler = (event) => {
    setItemCount(event.target.value);
    console.log(event.target.value);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: 0,
          max: 5,
          step: 1,
          defaultValue: itemCount,
          onChange: countHandler,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
