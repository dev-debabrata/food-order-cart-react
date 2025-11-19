export default function Input({ label, id, ...props }) {
  return (
    <p className="my-2 flex flex-col">
      <label htmlFor={id} className="font-bold mb-2">
        {label}
      </label>

      <input
        id={id}
        name={id}
        required
        className="w-full max-w-[20rem] p-2 rounded border border-gray-300"
        {...props}
      />
    </p>
  );
}


// export default function Input({ label, id, ...props }) {
//   return (
//     <p className="control">
//       <label htmlFor={id}>{label}</label>
//       <input id={id} name={id} required {...props} />
//     </p>
//   );
// }
