import Icon from "../Icon";
import "./resume-card.css";

const ResumeCard = ({ value, title, iconName, backgroundCard, marginCard }) => (
  <div className="resume-card" style={{backgroundColor: backgroundCard, margin: marginCard}}>
    <Icon className="resume-card__icon" name={iconName} color="#fff" width={35} height={35}/>
    <span className="resume-card__value">{value}</span>
    <h2 className="resume-card__title">{title}</h2>
  </div>
);

export default ResumeCard;
