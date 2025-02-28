import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
