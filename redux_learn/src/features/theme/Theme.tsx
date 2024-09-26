import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toogleTheme } from "./ThemeSlice";

const ThemeBtn = () => {
  const DarkMode = useAppSelector((state) => state.theme.DarkTheme);
  const dispatch = useAppDispatch();

  console.log(DarkMode);
  return <button onClick={() => dispatch(toogleTheme())}>Clickl</button>;
};

export default ThemeBtn;
