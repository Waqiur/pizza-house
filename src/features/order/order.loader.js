import { getOrder } from "../../services/apiRestaurant";
import { clearCart } from "../cart/cartSlice";
import store from "../../store";
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  store.dispatch(clearCart());
  return { order };
}
