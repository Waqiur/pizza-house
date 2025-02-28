import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getItemQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getItemQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default UpdateItemQuantity;
