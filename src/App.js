import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [table, setTable] = useState(["mohammed", "assia", "rania"]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTable([...table, input]);
    setInput("");
  };
  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <List users={table} />
    </>
  );
}

export default App;
