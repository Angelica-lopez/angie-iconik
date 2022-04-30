import PropTypes from "prop-types";
import SVG from "rect-inlinesvg";
import "./import.css"

const Icon = ({ width, height, name, color }) => (
  <SVG 
    src={require(`../../assets/icons/${name}.svg`)}
    width={width}
    height={height}
    title={name}
    style={{fill: color}}
  />
);

Icon.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
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
