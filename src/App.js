import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="p-5">
      <Header />
      <hr className="my-5 border-t-4 border-gray-700" />
      <Main />
    </div>
  );
}

export default App;
