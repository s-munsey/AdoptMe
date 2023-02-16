import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Peppa" animal="Dog" breed="Pug" />
      <Pet name="Spot" animal="Cat" breed="Fold" />
      <Pet name="Peep" animal="Bird" breed="Budgie" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
