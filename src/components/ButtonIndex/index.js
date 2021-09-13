import "./style.css";
function ButtonIndex({ next, setNext, nextPage, previousPage }) {
  return (
    <div className="divBtn">
      <button className="Btn" onClick={previousPage}>
        Back
      </button>
      <p onClick={() => setNext(next - 2)}>{next >= 3 ? next - 2 : ""}</p>
      <p onClick={() => setNext(next - 1)}>{next >= 2 ? next - 1 : ""}</p>
      <p>{next}</p>
      <p onClick={() => setNext(next + 1)}>{next + 1 < 35 ? next + 1 : ""}</p>
      <p onClick={() => setNext(next + 2)}>{next + 2 <= 34 ? next + 2 : ""}</p>
      <button className="Btn" onClick={nextPage}>
        Next
      </button>
    </div>
  );
}
export default ButtonIndex;
