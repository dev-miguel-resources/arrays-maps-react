import { useState } from "react";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
