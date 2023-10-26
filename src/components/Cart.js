import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";
const Cart = () => {
    const dispatch=useDispatch();

    const clearAllCart=()=>{
        dispatch(clearCart())

    }
  const cartItems = useSelector((store) => store.cart.Items);
  return (
    <div className=" m-4 p-4 text-center">
      <h1 className=" text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className=" p-2 m-2 bg-black text-white rounded" onClick={clearAllCart}>
          Clear Cart
        </button>
        {cartItems.length==0 && <h1>Please add item to the cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
