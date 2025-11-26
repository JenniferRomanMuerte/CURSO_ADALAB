import "../styles/Tooltip.scss";

function Tooltip({children}){
  return(
    <div className="Tooltip">
      <span className="Tooltip__icon">?</span>
      <div className="Tooltip__container">
        {children}
      </div>
    </div>
  );
}
export default Tooltip;