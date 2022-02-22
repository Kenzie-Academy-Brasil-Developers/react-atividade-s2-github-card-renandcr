import "./App.css";
import { Input } from "./components/Input/index";
import { useState } from "react";
import { ListCard } from "./components/ListCard";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Input
          setData={setData}
          setError={setError}
          data={data}
          error={error}
        />
        <ListCard data={data} />
      </header>
    </div>
  );
}

export default App;
