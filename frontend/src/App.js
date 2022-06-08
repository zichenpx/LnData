import Header from "./components/Header"
import SearchPanel from "./components/SearchPanel";
import ShowChart from "./components/ShowChart"
import ResutlsTable from "./components/Table";

import { useEffect } from "react";
import { useState } from "react";

import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   fetch("/all")
  //     .then((response) => response.json())
  //     .then((results) => setPlayers(results)
  // });

  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <ShowChart />
      <ResutlsTable result/>
    </div>
  );
}

export default App;
