import MenuListItem from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItem
          key={difficulty}
          isSelected={props.difficulty === difficulty}
          difficulty={difficulty}
          onClick={props.onItemClick}
        />
      ))}
    </div>
  );
};

export default MenuList;
