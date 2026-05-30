import { useState } from "react";

function LazyInitialisation() {
  function welcome() {
    console.log("welcome");
    return 10;
  }
  const [count, setCount] = useState(() => welcome());

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}
export default LazyInitialisation;
