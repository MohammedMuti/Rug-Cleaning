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
    </>
  );
};

export default Benefit;
