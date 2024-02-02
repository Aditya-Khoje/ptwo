import "./App.css";
import { useState } from "react";

function App() {
  const [objArray, setObjArray] = useState([]);

  const func1 = () => {
    setObjArray([
      ...objArray,
      {
        Name: "Aditya",
        Surname: "Khoje",
        RollNo: 1,
      },
    ]);
  };

  console.log(objArray);

  return (
    <>
      <h1>Aditya Khoje</h1>
      <button onClick={func1}>Click</button>
      {objArray.map((obj, index) => (
        <div key={index}>
          <h1>{`${obj.Name} ${obj.Surname} - Roll No: ${obj.RollNo}`}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
