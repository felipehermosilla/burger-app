import React from 'react';

import Aux from '../../../hoc/Aux';

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
      <p>Continue to Checkout?</p>
    </Aux>
  );
}

export default orderSummary;
