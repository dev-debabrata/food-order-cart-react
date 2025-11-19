import { useContext } from 'react';

import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header className='flex justify-between items-center py-12 px-[10%]'>
      <div className='flex items-center gap-4'>
        <img
          src={logoImg}
          alt="A restaurant"
          className='w-16 h-16 object-contain rounded-full border-2 border-[#ffc404]' />
        <h1 className='font-[Lato] font-bold text-[2rem] m-0 text-[#ffc404] uppercase tracking-[0.2rem]'>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
