import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Unspecified props will be spreaded into underlying `span`.
 */
export const Badge = ({ color = "gray", render, ...props }) => {
  const className = classNames(
    `inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold text-gray-700`,
    // `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`,

    //bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 items-center
    classByColor[color],
    props.className
  );

  if (render) {
    return render({
      className,
      ...props,
    });
  }

  return <span {...props} className={className} />;
};

const classByColor = {
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
  yellow: "bg-yellow-100 text-yellow-800",
  gray: "bg-gray-100 text-gray-800",
  purple:"bg-purple-200 text-gray-800"
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["gray", "green", "red", "yellow","purple"]),
  render: PropTypes.func,
};
