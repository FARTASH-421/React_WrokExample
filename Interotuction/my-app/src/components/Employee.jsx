import "./myEmplay.css";
function Emplyee(props) {
  return (
    <div className="bg-green-300 p-10 border-2 border-b-teal-950 my-2 text-wrap font-bold text-3xl hover:bg-yellow-600">
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
