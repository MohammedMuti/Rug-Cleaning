const Benefit = (props) => {
  return (
    <>
      <div className="benefit-box">
        <div className="benefit-img">
          <img src={props.img} alt="" />
        </div>
        <div className="benefit-info">
          <h4>{props.title}</h4>
          <p>{props.info}</p>
        </div>
      </div>
      <div className="benefit-box r">
        <div className="benefit-info">
          <h4>{props.title_m}</h4>
          <p>{props.info_m}</p>
        </div>
        <div className="benefit-img">
          <img src={props.img_m} alt="" />
        </div>
      </div>
    </>
  );
};

export default Benefit;
