export default function Error({ title, message }) {
  return (
    <div className="w-[90%] max-w-[400px] my-8 mx-auto p-4 bg-[#f9b8b8] text-[#6d0b0b] rounded-md">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
