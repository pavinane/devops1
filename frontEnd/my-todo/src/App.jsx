import { useState } from "react";

import "./App.css";
import Todo from "./component/Todo";

function App() {
 

  return (
    <div className="flex justify-center py-6 flex-col  w-90 m-auto gap-6  ">
     <Todo />
    </div>
  );
}

export default App;
