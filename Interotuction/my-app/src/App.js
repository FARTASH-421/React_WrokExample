import "./index.css";
import Emplyee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const chcek = true;
  const [employees, setEmployees] = useState([
    {
      name: "Fartash",
      roule: "Maniger",
      img: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_640.jpg",
    },
    {
      name: "Qadir",
      roule: "software Engeneer",
      img: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_640.jpg",
    },
    {
      name: "Hujat",
      roule: "Disgner UX/UI",
      img: "https://cdn.pixabay.com/photo/2015/08/31/10/07/man-915230_640.jpg",
    },
    {
      name: "Samad",
      roule: "Tester",
      img: "https://cdn.pixabay.com/photo/2015/12/25/15/53/girl-1107788_960_720.jpg",
    },
    {
      name: "Hadi",
      roule: "software Engeneer",
      img: "https://cdn.pixabay.com/photo/2023/11/18/09/12/ai-generated-8395968_640.jpg",
    },
    {
      name: "Ali",
      roule: "Boss",
      img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_640.jpg",
    },
    {
      name: "Ali",
      roule: "Boss",
      img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_640.jpg",
    },
    {
      name: "Ali",
      roule: "Boss",
      img: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_640.jpg",
    },
  ]);

  return (
    <div className="App">
      <div className="h-full w-full flex flex-wrap">
        {employees.map((element) => {
          console.log(uuidv4());
          return (
            <Emplyee
              key={uuidv4()}
              name={element.name}
              role={element.roule}
              img={element.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
