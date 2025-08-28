// import { set } from "firebase/database";
import dayjs from "dayjs";
import { useState, useRef } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Addtodos = ({ onAdd, showError }) => {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dateInputRef = useRef(null);

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
    onAdd(capitalizedInputFirstWord, dueDate || "");
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
          min={2}
          maxLength={50}
          required
        />
        <p>Minimum Length 5 words</p>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          // id="dateInput"
          className="hello"
          ref={dateInputRef}
          onKeyDown={handleKeyDown}
          placeholder="Due Date"
          style={{ display: "none" }}
        />
        {/* Calendar Icon instead of input */}
        <button
          type="button"
          className="calendar-icon-btn"
          onClick={() => dateInputRef.current.showPicker()}
        >
          <FaRegCalendarAlt size={20} />
        </button>
      </div>
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
};
export default Addtodos;
