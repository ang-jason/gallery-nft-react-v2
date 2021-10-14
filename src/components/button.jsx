import cn from "classnames";
import PropTypes from "prop-types";

export const Button = ({ type = "button", variant, render, ...props }) => {
  const className = cn(
    "inline-flex justify-center items-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    variant && classByVariant[variant],
    props.className
  );

  if (render) {
    return render({
      className,
      ...props,
    });
  }

  return <button type={type} {...props} className={className} />;
};
//border-pink-500 text-pink-500 bg-white hover:text-pink-700
//border-transparent text-white bg-pink-600 hover:bg-pink-700

//bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded


const classByVariant = {
  primary: "rounded-lg py-2 px-4 border border-blue-500 border-transparent text-white bg-blue-500 hover:border-transparent hover:bg-white hover:text-blue-500",
  outline: "rounded-lg border-blue-500 text-blue-500 bg-white hover:border-transparent hover:text-white py-2 px-4 border border-blue-500 hover:bg-blue-500 ",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline"]),
  render: PropTypes.func,
};
