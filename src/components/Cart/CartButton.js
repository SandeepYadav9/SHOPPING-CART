import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleHandler());
  };
  const cartCounter=useSelector((state)=>state.cart.cartCounter)
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCounter}</span>
    </button>
  );
};

export default CartButton;
