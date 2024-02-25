import "./Tool.scss";

const Tool = ({ toolNo, tool }) => {
  const stars = Array.from({ length: 4 });

  let starRating = "fa-solid fa-star";

  if (tool.ratingText === "Excellent") {
    starRating = "fa-solid fa-star-half-stroke";
  } else if (tool.ratingText === "Very Good") {
    starRating = "fa-regular fa-star";
  }

  let logo = null;

  if (tool.toolLabel === "Best Choice") {
    logo = "img/trophy.png";
  } else if (tool.toolLabel === "Best Value") {
    logo = "img/diamond.png";
  }

  return (
    <>
      <div className="tool">
        {tool.toolLabel && (
          <h2 className="label">
            <img src={logo} /> {tool.toolLabel}
          </h2>
        )}
        <div className="toolContainer">
          <div className="tool-img-section">
            <h2>{toolNo}</h2>
            <div className="img">
              <img src="/img/toolImg.png" alt="tool" className="toolImage" />
              <h6>{tool.toolTitle}</h6>
            </div>
          </div>
          {tool.toolTitle != "CDK" && (
            <div className="tool-text-section">
              <p className="toolAbout">
                <span className="title">{tool.toolName}- </span>
                {tool.toolAbout}
              </p>
              <h3 id="highlight">Main highlights</h3>
              <p className="highlightPara">
                [What You Get]: {tool.toolHighlight}
              </p>
              <a className="showLink" href="">
                Show more <i className="fa-solid fa-chevron-down"></i>
              </a>
            </div>
          )}
  
          {tool.toolTitle == "CDK" && (
            <div className="tool-text-section">
              <p className="toolAbout">
                <span className="title">{tool.toolName}: </span>
                {tool.toolAbout}
              </p>
              <p className="discount">26% Off</p>
              <h3 id="highlight">Main highlights</h3>
              <div className="cdkHighlightContainer">
                {tool.toolHighlight.map((obj) => (
                  <div>
                    {" "}
                    <h3 className="highlightCount">{obj.Count} </h3>{" "}
                    <h3 className="cdkHighlight">{obj.highlight}</h3>{" "}
                  </div>
                ))}
              </div>

              <h3 id="why-love-heading">Why we love it</h3>
              <div className="why-love-section">
                {tool.toolFeature.map((feature) => (
                  <>
                    {" "}
                    <h3 className="feature">
                      <i className="fa-solid fa-check"></i> {feature}
                    </h3>{" "}
                  </>
                ))}
              </div>
              <a className="showLink" href="">
                Show more
              </a>
            </div>
          )}

          <div className="tool-rating-section">
            <div className="rating">
              <h2>{tool.toolRating}</h2>
              <h4>{tool.ratingText}</h4>
              <span id="info">i</span>

              {stars.map((_, index) => (
                <i key={index} className="fa-solid fa-star"></i>
              ))}
              { <i className={starRating}></i> }
            </div>

            <button className="viewBtn">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
