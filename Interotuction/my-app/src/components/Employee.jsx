function Emplyee(props) {
  return (
    <div className="h-[280px] w-[550px] p-5 bg-white rounded-3xl m-3 shadow-[0_0_10px_black] flex gap-2 hover:bg-green-200">
      <div className="w-1/3 h-full flex justify-center items-center overflow-hidden">
        <img
          src={props.img}
          alt="#"
          className="bg-gray-400 h-48 w-64 rounded-full"
        />
      </div>
      <div className="w-2/3 h-full p-5 flex gap-10 flex-col justify-center items-center">
        <div className="text-black font-bold text-4xl font-serif">
          <h1> {props.name}</h1>
        </div>
        <div className="text-gray-400 font-serif text-3xl">
          <h2>{props.role}</h2>
        </div>
        <button className="h-20 w-32 rounded-3xl font-bold text-2xl font-serif border-2 border-gray-500 text-purple-600 hover:bg-gray-200">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Emplyee;
