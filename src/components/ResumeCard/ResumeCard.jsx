import Icon from "../Icon";
import PropTypes from "prop-types";
import "./resume-card.css";

const ResumeCard = ({ 
  value, 
  title, 
  iconName, 
  backgroundCard, 
  marginCard, 
  widthCard, 
  heightCard,
}) => (
  <div className="resume-card" style={{backgroundColor: backgroundCard, margin: marginCard}}>
    <Icon className="resume-card__icon" name={iconName} color="#fff" width={widthCard} height={heightCard}/>
    <span className="resume-card__value">{value}</span>
    <h2 className="resume-card__title">{title}</h2>
  </div>
);

ResumeCard.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  backgroundCard: PropTypes.string,
  marginCard: PropTypes.number,
  widthCard: PropTypes.number,
  heightCard: PropTypes.number,
};

ResumeCard.defaultProps = {
  marginCard: 0,
  backgroundCard: "gray",
};


export default ResumeCard;
