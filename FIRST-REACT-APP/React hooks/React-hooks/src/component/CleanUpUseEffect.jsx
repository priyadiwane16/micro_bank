import { useEffect, useState } from "react";

function CleanUpUseEffect() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>Timer : {timer}</div>
    </>
  );
}
export default CleanUpUseEffect;
