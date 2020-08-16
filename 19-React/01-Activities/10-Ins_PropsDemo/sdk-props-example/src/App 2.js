import React from 'react';
import Header from "./components/header/Header";

const name = "Tony";

function App() {
  return (
    <>
      <Header realname={name} superheroname="Iron Man" age={35}>This is from App</Header>
    </>
  );
}

export default App;
