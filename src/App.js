import React, { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("carregou!!!");
  }, []);

  useEffect(() => {
    console.log("o counter carregou/alterou!!!", counter);
  }, [counter]);

  function add() {
    setCounter((v) => v + 1);
  }

  return (
    <div>
      <h1>testando o counter: {counter}</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}
