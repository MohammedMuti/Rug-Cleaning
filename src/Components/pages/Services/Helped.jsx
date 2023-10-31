const Helped = (props) => {
  return (
    <>
      <div className="helped-box">
        <div className="helped-img">
          <img src={props.img} alt="" />
        </div>
        <div className="helped-info">
          <h4>{props.title}</h4>
        </div>
      </div>
    </>
  );
};

export default Helped;
