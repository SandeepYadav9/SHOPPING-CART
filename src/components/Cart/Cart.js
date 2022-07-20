import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const itemLists = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemLists.map((list) => (
          <CartItem
            item={{
              title: list.title,
              quantity: list.quantity,
              total: list.totalQuantity,
              price: list.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
