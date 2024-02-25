import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filterContainer">
      <div className="left">
        <div className="last-updated">
          <i className="fa-solid fa-check fa-check-filter"></i>
          <span className="updated-text">Last Updated - </span>
          <span className="updated-time">February 22, 2020</span>
        </div> 
        <div className="advertise">
          <i className="fa-solid fa-info"></i>
          <span className="advertise-text">Advertising Disclosure</span> 
        </div>
      </div>
      <div className="right">
        <span className="Relevent-text">Top Relevant</span>
        <i className="fa-solid fa-chevron-down fa-chevron-down-filter"></i>
      </div>
    </div>
  );
};

export default Filter;
