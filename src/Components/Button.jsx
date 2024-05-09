import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm px-4 text-gray-900 py-2 md:px-6 md:py-4 rounded-full bg-stone-100 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-slate-900 hover:text-white focus:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-800 focus:ring-offset-2 disabled:cursor-not-allowed focus:text-slate-50";

  if (to)
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={base}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={base}>
      {children}
    </button>
  );
}

export default Button;
