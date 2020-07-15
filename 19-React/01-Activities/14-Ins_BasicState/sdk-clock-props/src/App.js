import React from 'react';
import Clock from "./components/clock/Clock";

function App() {
  return (
    <Clock date={new Date()} />
  );
}

export default App;
