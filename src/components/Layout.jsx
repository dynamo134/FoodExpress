import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet /> {/* Routed components will appear here */}
      <Footer />
    </div>
  );
}

export default Layout;
