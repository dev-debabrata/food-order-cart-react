export default function Button({ children, textOnly, className = '', ...props }) {
  const baseClasses = textOnly
    ? 'bg-transparent border-none text-[#ffc404] hover:text-[#ffab04]'
    : 'cursor-pointer bg-[#ffc404] border border-[#ffc404] text-[#1f1a09] px-6 py-2 rounded hover:bg-[#ffab04] hover:border-[#ffab04]';

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}


// export default function Button({ children, textOnly, className, ...props }) {
//   let cssClasses = textOnly ? 'text-button' : 'button';
//   cssClasses += ' ' + className;

//   return (
//     <button className={cssClasses} {...props}>
//       {children}
//     </button>
//   );
// }
