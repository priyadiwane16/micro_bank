function Hello() {
  var myName = "Priya";
  let fullName = () => {
    return "Priya Diwane";
  };
  var city = "Pune";
  return (
    <h4>
      Hello this is the REACT course , i am your mentor {myName} ,{fullName()}{" "}
      And am from {city}
    </h4>
  );
}
export default Hello;
