import { useEffect, useState } from "react";

function OptimizeUseEffect() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");
  useEffect(() => {
    //api call
    const timeout = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>{debounceTerm}</p>
    </div>
  );
}
export default OptimizeUseEffect;
