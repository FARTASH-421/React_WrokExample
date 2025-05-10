import "./myEmplay.css";
function Emplyee(props) {
  return (
    <div className="myEmplay">
      <div>
        {props.name ? (
          <p className="ex"> Hello {props.name}</p>
        ) : (
          <p className="noex"> no body</p>
        )}
      </div>
      <h6 className="age">{props.age > 18 ? props.age : "It's a Child"}</h6>
    </div>
  );
}

export default Emplyee;
