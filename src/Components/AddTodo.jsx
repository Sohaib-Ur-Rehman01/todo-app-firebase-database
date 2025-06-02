// import { set } from "firebase/database";
import dayjs from "dayjs";
import { useState } from "react";
const Addtodos = ({ onAdd, showError }) => {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const inputFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleAdd = () => {
    const selectedDueDate = dayjs(dueDate);
    const now = dayjs();
    if (selectedDueDate.isBefore(now)) {
      showError("Please select a due date and time in the future.");
      return;
    }
    const capitalizedInputFirstWord = inputFirstLetterCapital(input);
    onAdd(capitalizedInputFirstWord, dueDate);
    setInput("");
    setDueDate("");
  };
  const handleKeyDown = (e) => {
    e.key === "Enter" ? handleAdd() : null;
  };
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          onKeyDown={handleKeyDown}
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          id="dateInput"
          onKeyDown={handleKeyDown}
          placeholder="Due Date"
        />
        <label htmlFor="dateInput">Enter Due Date and Time</label>
      </div>
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
};
export default Addtodos;
