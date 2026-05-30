import "../App.css";
import { useState } from "react";

function StateWithArrayObj() {
  const [allValues, setAllValues] = useState({
    //object
    firstName: "Priya",
    lastName: "Diwane",
    address: { city: "Pune", country: "India" }, // nested state
  });

  const handleClick = () => {
    setAllValues({
      ...allValues,
      firstName: "Ram",
      lastName: "Chopra",
      address: { ...allValues.address, city: "Bhopal", country: "India" },
    });
  };

  return (
    <>
      <div>
        <h4>
          {" "}
          My first name is {allValues.firstName} and last name is{" "}
          {allValues.lastName} and city is {allValues.address.city} and country
          is {allValues.address.country}
        </h4>
        <button className="updateButton" onClick={handleClick}>
          {" "}
          Update
        </button>
      </div>
    </>
  );
}
export default StateWithArrayObj;
