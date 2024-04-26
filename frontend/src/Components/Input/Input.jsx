function Input({label, type, placeholder, value, handler, name}) {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-white text-lg">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={handler}
        name={name}
        className="mt-1 block w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md focus:outline-none"
      />
    </div>
  );
}

export default Input;
