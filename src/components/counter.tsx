import { useState } from "react";
import s from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((num) => num + 1);
  };

  return (
    <div className={s.button}>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
};
