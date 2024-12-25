import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [MasterList, setMasterList] = useState([]);
  const [SubList, setSubList] = useState([]);
  const handleMasterList = () => {
    if (MasterList.indexOf(name) >= 0 || name === "") {
      return;
    }
    setMasterList((prev) => [...prev, name]);
    setName("");
  };
  const handleAdd = (ele) => {
    if (SubList.indexOf(ele) >= 0) {
      return;
    }
    setSubList((prev) => [...prev, ele]);
  };
  const handleDelete = (ele) => {
    const players = [...SubList];
    const mPlayers = players.filter((item) => item !== ele);
    setSubList(mPlayers);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleMasterList}>Add</button>
      {MasterList.length > 0 && (
        <>
          <h1>Master Team</h1>
          <ul>
            {MasterList.map((ele, idx) => {
              return (
                <li key={idx}>
                  {ele}
                  <button onClick={() => handleAdd(ele)}>Add</button>
                  <button onClick={() => handleDelete(ele)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {SubList.length > 0 && (
        <>
          <h1>Final Team</h1>
          <ul>
            {SubList.map((ele, idx) => {
              return <li>{ele}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}
