const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h6> * No Food available </h6>}</>;
};

export default ErrorMessage;
