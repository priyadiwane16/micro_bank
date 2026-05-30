import { useEffect, useState } from "react";

function APIFetchUseEffect() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://chromewebstore.google.com/?hl=en")
      .then((response) => response.json())
      .then((json) => SVGMetadataElement(json))
      .catch((error) => console.log("Error fetching API"));
  }, []);

  return <>{data ? <div>{data[0].tittle}</div> : <p>No data found</p>}</>;
}
export default APIFetchUseEffect;
