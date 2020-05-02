import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map( igkey => {
    return (
      <li key={igkey}>
        <span style={{ texTransform: 'capitalize' }}>{igkey}</span>: {props.ingredients[igkey]}
      </li>);
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredientes:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;
