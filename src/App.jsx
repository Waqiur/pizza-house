import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import { loader as menuLoader } from "./features/menu/menu.loader.js";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/order/Order.jsx";
import { loader as orderLoader } from "./features/order/order.loader.js";
import CreateOrder from "./features/order/CreateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Loader from "./ui/Loader.jsx";
import { action as createOrderAction } from "./features/order/create-order.action.js";
import { action as updateOrderAction } from "./features/order/update-order.action.js";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loader />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
