import classes from "./CartButton.module.css";
import { toggleModel } from "../../feachers/modelSlice";
import { useAppDispatch } from "../../store/hooks";

const CartButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(toggleModel())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
