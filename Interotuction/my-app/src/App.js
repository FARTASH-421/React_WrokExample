import "./App.css";
import Emplyee from "./components/Employee";
import { useState } from "react";

function App() {
  const chcek = true;
  const [name, setName] = useState("Fartash");
  // let name = "Fartash";

  return (
    <div className="App">
      <header className="App-header">
        {chcek ? (
          <>
            <input
              className="myInput"
              placeholder="Enter name*"
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            ></input>

            <Emplyee name={name} age={21} />
            <Emplyee name={"Abdul Qadir"} age={17} />
            <Emplyee name={""} age={41} />
            <Emplyee />
          </>
        ) : (
          <h1>Hello Reacte</h1>
        )}
      </header>
    </div>
  );
}

export default App;
