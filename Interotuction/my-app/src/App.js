import "./App.css";
import Emplyee from "./components/Employee";

function App() {
  const chcek = true;

  return (
    <div className="App">
      <header className="App-header">
        {/* {console.log(chcek)} */}
        {chcek ? (
          <>
            <Emplyee />
            <Emplyee />
            <Emplyee />
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
