function Random() {
  let number = Math.random() * 10;
  let randomNumber = Math.round(number);
  return <h4>Random number is : {randomNumber}</h4>;
}
export default Random;
