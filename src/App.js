import React, { useEffect, useState } from "react";
import Counter from "./counter";

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

  function minus() {
    setCounter((v) => v - 1);
  }

  return (
    <div>
      <h1>testando o counter {counter}</h1>
      <Counter value={counter} onClick={add} title="Add" />
      <Counter value={counter} onClick={minus} title="Minus" />
    </div>
  );
}
