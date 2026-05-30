import { useState } from "react";

function LazyLoading() {
  function expensive() {
    console.log("expensive");
    return 10;
  }
  const [count, setCount] = useState(expensive());

  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}
export default LazyLoading;
