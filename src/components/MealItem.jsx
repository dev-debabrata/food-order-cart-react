import { useContext } from 'react';

import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className='bg-[#1d1a16] rounded-2xl overflow-hidden text-center shadow'>
      <article className='h-full flex flex-col justify-between'>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} className='w-full h-80 object-cover' />
        <div>
          <h3 className='text-[1.5rem] font-bold my-3'>{meal.name}</h3>
          <p className='inline-block bg-[#312c1d] text-[#ffc404] text-sm font-bold px-8 py-2 rounded'>
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className='mb-6'>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
