import { currencyFormatter } from '../util/formatting.js';

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="flex justify-between items-center my-2">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="flex gap-4 items-center">
        <button
          onClick={onDecrease}
          className='cursor-pointer text-base w-6 h-6 rounded-full bg-[#312c1d] text-[#ffc404] flex justify-center items-center hover:bg-[#1d1a16] hover:text-[#ffab04]'>
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={onIncrease}
          className='cursor-pointer text-base w-6 h-6 rounded-full bg-[#312c1d] text-[#ffc404] flex justify-center items-center
               hover:bg-[#1d1a16] hover:text-[#ffab04]'>+</button>
      </p>
    </li>
  );
}
