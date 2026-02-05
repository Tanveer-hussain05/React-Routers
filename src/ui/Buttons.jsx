const Button = ({ title = "Button", to, icon, primary, ...rest }) => {
  return (
    <button
    to={to}
      className={`px-8 py-4 rounded-xl font-semibold bg-linear-to-br from-cyan-400 to-blue-600 text-white cursor-pointer
      ${
        primary
          ? " h-12 flex items-center  "
          : " hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      }`}
      {...rest}
    >
      <span className="flex items-center gap-2">
        {title}
        {icon && icon}
      </span>
    </button>
  );
};

export default Button;
