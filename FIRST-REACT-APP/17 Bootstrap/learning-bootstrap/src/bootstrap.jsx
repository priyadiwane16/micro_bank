import styles from "./bootstrap.module.css";

function Bootstrap() {
  return (
    <div>
      <h4>User Table</h4>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">ID</li>
        <li className="list-group-item">Name</li>
        <li className="list-group-item">E-mail</li>
      </ul>
      <ul className="list-group list-group-horizontal-sm">
        <li className="list-group-item">1</li>
        <li className="list-group-item">Priya Diwane</li>
        <li className="list-group-item">cgvhgv@gmail.com</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">2</li>
        <li className="list-group-item">Pooja Sharma</li>
        <li className="list-group-item">piijkjs@gmail.com</li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">3</li>
        <li className="list-group-item">Rohit Rao</li>
        <li className="list-group-item">rfgjh@gmail.com</li>
      </ul>
    </div>
  );
}
export default Bootstrap;
