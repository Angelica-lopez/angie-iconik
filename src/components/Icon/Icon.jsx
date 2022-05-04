import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import "./icon.css";

const Icon = ({ width, height, name, color, className }) => (
  <SVG 
    src={require(`../../assets/icons/${name}.svg`)}
    width={width}
    height={height}
    title={name}
    style={{fill: color}}
    className={className}
  />
);

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.oneOf([
    "group",
    "money-in",
    "money-out",
    "calendar-check",
  ]).isRequired,
};

Icon.defaultProps = {
  width: 30,
  height: 30,
  color: "black",
};

export default Icon;
