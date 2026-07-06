import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  console.log("Layout render ho raha hai!");

  return (
    <div className=" flex flex-col min-h-screen ">
      <Header />
      <main className=" flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
