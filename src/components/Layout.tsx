import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function Layout() {
  return (
    <div className="site">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
