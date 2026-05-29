const FoodList = () => {
  const foodList = ["smoothy", "salad", "Rice", "chilla", "edli", "dosa"];

  return (
    <div>
      <ol class="list-group list-group-numbered">
        <h5>Food List You can eat</h5>
        {foodList.map((food) => (
          <li class="list-group-item">{food}</li>
        ))}
      </ol>
    </div>
  );
};
export default FoodList;
